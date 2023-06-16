import React from "react";
import { CraftResult } from "../../types/global";
import Image from "next/image";

type CraftResultProps = {
    results: CraftResult[];
};

const CraftResults = ({ results }: CraftResultProps) => {
    console.log(results);

    return (
        <div className="text-white/70">
            {results.map(result => (
                <a key={result.name} className="p-2 grid grid-cols-5 items-center gap-4" href={result.market_url} target="_blank">
                    <div className="relative w-24 aspect-square">
                        <Image src={result.img_src} sizes="24rem" fill alt="result skin" />
                    </div>
                    <h4 className="col-span-3">{result.name}</h4>
                    <div className="flex flex-col">
                        <span>{result.price}</span>
                        <span>{result.lowest_price}</span>
                        <span>{result.median_price}</span>
                    </div>
                </a>
            ))}
        </div>
    );
};

export default CraftResults;
