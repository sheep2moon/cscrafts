import React from "react";
import { useCraftsStore } from "../../state-store/craftStore";
import Image from "next/image";
import { Craft } from "../../types/global";
import { searchCraft } from "../../helpers/call-steam-market";

const CraftSummary = () => {
    const { selectedWeapon, stickerSlots, setSelectedWeapon } = useCraftsStore(state => state);

    const handleSearch = () => {
        const craft: Craft = {
            stickers: stickerSlots.map(slot => slot.sticker),
            exteriors: [0, 1, 2, 3],
            weapon: selectedWeapon?.name || ""
        };
        searchCraft(craft);
    };

    return (
        <div className="grid grid-cols-5 gap-4 mt-10 mx-auto">
            <div className="flex flex-col rounded-md justify-center items-center bg-slate-600/10">
                {/*TODO: ADD DEFAULT IMAGE? */}
                <div className="relative w-20 aspect-square ">{selectedWeapon?.img_src && <Image src={selectedWeapon.img_src} alt="weapon" fill />}</div>
                <h4 className="text-lg text-center">{selectedWeapon?.name}</h4>
            </div>
            <div className="grid col-span-3 grid-cols-4 gap-2">
                {stickerSlots.map(stickerSlot => (
                    <div key={stickerSlot.id} className="rounded-md bg-slate-600/20 w-32 aspect-square flex flex-col items-center justify-center">
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
    );
};

export default CraftSummary;
