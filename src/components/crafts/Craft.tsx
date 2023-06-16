import React, { useState } from "react";
import { Craft, CraftResult } from "../../types/global";
import { searchCrafts } from "../../call-api/post-search-craft";
import { DbCraft } from "../../types/supabase-db-types";
import { exteriorsTags } from "../../constants/search-query-tags";
import { getTypeTagTitle, getWeaponByTag } from "../../helpers/convert-from-tag";
import Image from "next/image";
import CraftResults from "./CraftResults";

type CraftProps = {
    dbCraft: DbCraft;
};

const Craft = ({ dbCraft }: CraftProps) => {
    const [results, setResults] = useState<CraftResult[] | null>(null);
    const [isResultsLoading, setIsResultsLoading] = useState(false);

    const handleSearch = async () => {
        setIsResultsLoading(true);
        const craft: Craft = {
            stickers: dbCraft.stickers,
            exteriors: dbCraft.exteriors,
            weapon_tag: dbCraft.weapon_tag,
            type_tag: dbCraft.type_tag
        };
        const results = await searchCrafts(craft);
        setResults(results);
        setIsResultsLoading(false);
    };
    return (
        <div className="flex flex-col gap-4">
            <CraftPreview handleSearch={handleSearch} craft={dbCraft} />
            {isResultsLoading && <p>Loading...</p>}
            {results && <CraftResults results={results} />}
        </div>
    );
};

export default Craft;

const CraftPreview = ({ craft, handleSearch }: { craft: DbCraft; handleSearch: () => void }) => {
    const currentWeapon = getWeaponByTag(craft.weapon_tag);

    return (
        <div className="flex flex-col mt-10 ">
            <div className="mx-auto flex items-center gap-8">
                <div className="flex gap-4 items-center bg-slate-900/50 text-lg p-1 rounded-sm">
                    <span>Exteriors :</span>
                    <div className="flex gap-2">
                        {craft.exteriors.map(exteriorIndex => (
                            <div key={`exterior${exteriorIndex}`}>{exteriorsTags[exteriorIndex].title}</div>
                        ))}
                    </div>
                </div>
                <div className="flex gap-4 items-center bg-slate-900/50 text-lg p-1 rounded-sm">
                    <span>Type:</span>
                    <div className="flex gap-2">{getTypeTagTitle(craft.type_tag)}</div>
                </div>
            </div>
            <div className="grid grid-cols-5 gap-4 mt-4 mx-auto">
                {currentWeapon && (
                    <div className="flex flex-col rounded-md justify-center items-center bg-slate-600/10">
                        <div className="relative w-20 aspect-square ">{currentWeapon.img_src && <Image src={currentWeapon.img_src} alt="weapon" fill />}</div>
                        <h4 className="text-lg text-center">{currentWeapon?.name}</h4>
                    </div>
                )}
                <div className="grid col-span-3 grid-cols-4 gap-2">
                    {craft.stickers.map((stickerName, slotIndex) => (
                        <div key={`sticker${slotIndex}`} className="rounded-md bg-slate-600/20 w-32 aspect-square flex flex-col items-center justify-center">
                            {stickerName}
                        </div>
                    ))}
                </div>
                <div className="flex flex-col gap-2 justify-center">
                    <button onClick={handleSearch} className="p-4 bg-indigo-800 rounded-sm">
                        Search
                    </button>

                    <button className="p-4 bg-indigo-800 rounded-sm">Add to list</button>
                </div>
            </div>
        </div>
    );
};
