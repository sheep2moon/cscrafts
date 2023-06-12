import React from "react";
import { useCraftsStore } from "../../state-store/craftStore";
import Image from "next/image";

const CraftSummary = () => {
    const { selectedWeapon, stickers, setSticker, setSelectedWeapon } = useCraftsStore(state => state);

    return (
        <div className="grid grid-cols-5 mt-10 mx-auto">
            <div className="flex flex-col">
                {/*TODO: ADD DEFAULT IMAGE? */}
                <Image src={selectedWeapon?.img_src || ""} alt="weapon" width={80} height={80} />
                <h4 className="text-2xl">{selectedWeapon?.name}</h4>
            </div>
            {stickers.map(sticker => (
                <div key={sticker.name} className="flex flex-col items-center justify-center">
                    <div className="relative w-20 aspect-square">
                        <Image alt="sticker preview" src={sticker.img_src} />
                    </div>
                    <h4 className="text-center text-lg">{sticker.name}</h4>
                </div>
            ))}
        </div>
    );
};

export default CraftSummary;
