import React, { useState } from "react";
import { useCraftsStore } from "../../state-store/craftStore";
import Image from "next/image";
import { Craft } from "../../types/global";
import { searchCrafts } from "../../call-api/post-search-craft";
import Checkbox from "../common/Checkbox";

export const typeTags = [
    { title: "Any", tag: "" },
    { title: "StatTrak", tag: "tag_strange" },
    { title: "Souvenir", tag: "tag_tournament" }
];

export const exteriorsTags = [
    { value: false, title: "FN" },
    { value: false, title: "MW" },
    { value: false, title: "FT" },
    { value: false, title: "WW" },
    { value: false, title: "BS" }
];

export const CraftSummary = () => {
    const [exteriors, setExteriors] = useState(exteriorsTags);
    const [selectedTypeTag, setSelectedTypeTag] = useState(typeTags[0].tag);
    const { selectedWeapon, stickerSlots, removeSticker } = useCraftsStore(state => state);

    const handleSearch = () => {
        if (selectedWeapon && stickerSlots) {
            const craft: Craft = {
                stickers: stickerSlots.map(slot => slot.sticker?.name || ""),
                exteriors: [...exteriors.map((ex, index) => (ex.value ? index : null))].filter((v): v is number => v !== null),
                weapon_tag: selectedWeapon.tag,
                type_tag: typeTags[2].tag
            };
            console.log(craft);
            // const queryString =
            // searchCrafts(craft);
        }
    };

    const handleExteriorChange = (index: number) => {
        const newExteriors = [...exteriors];
        newExteriors[index].value = !newExteriors[index].value;
        setExteriors(newExteriors);
    };

    return (
        <div className="flex flex-col mt-10 ">
            <div className="flex items-center gap-8">
                <div className="flex gap-4 items-center bg-slate-900/50 text-lg p-1 rounded-sm">
                    <span>Exterior:</span>
                    <div className="flex gap-2">
                        {exteriors.map((_, exteriorIndex) => (
                            <Checkbox key={`exterior-checkbox-${exteriorIndex}`} checked={exteriors[exteriorIndex].value} onChange={() => handleExteriorChange(exteriorIndex)}>
                                {exteriors[exteriorIndex].title}
                            </Checkbox>
                        ))}
                    </div>
                </div>
                <div className="flex gap-4 items-center bg-slate-900/50 text-lg p-1 rounded-sm">
                    <span>Type:</span>
                    <div className="flex gap-2">
                        {typeTags.map(type => (
                            <Checkbox checked={selectedTypeTag === type.tag} key={type.tag} onChange={() => setSelectedTypeTag(type.tag)}>
                                {type.title}
                            </Checkbox>
                        ))}
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-5 gap-4 mt-4 mx-auto">
                <div className="flex flex-col rounded-md justify-center items-center bg-slate-600/10">
                    {/*TODO: ADD DEFAULT IMAGE? */}
                    <div className="relative w-20 aspect-square ">{selectedWeapon?.img_src && <Image src={selectedWeapon.img_src} alt="weapon" fill />}</div>
                    <h4 className="text-lg text-center">{selectedWeapon?.name}</h4>
                </div>
                <div className="grid col-span-3 grid-cols-4 gap-2">
                    {stickerSlots.map((stickerSlot, slotIndex) => (
                        <div onClick={() => removeSticker(slotIndex)} key={stickerSlot.id} className="rounded-md bg-slate-600/20 w-32 aspect-square flex flex-col items-center justify-center">
                            {stickerSlot.sticker && (
                                <>
                                    {" "}
                                    <div className="relative w-20 aspect-square">
                                        <Image fill alt="sticker preview" src={stickerSlot.sticker.img_src} />
                                    </div>
                                    <h4 className="text-center text-base">{stickerSlot.sticker.name}</h4>
                                </>
                            )}
                        </div>
                    ))}
                </div>
                <div className="flex flex-col gap-2 justify-center">
                    <button onClick={() => handleSearch()} className="p-4 bg-indigo-800 rounded-sm">
                        Search
                    </button>
                    <button className="p-4 bg-indigo-800 rounded-sm">Add to list</button>
                </div>
            </div>
        </div>
    );
};

export default CraftSummary;
