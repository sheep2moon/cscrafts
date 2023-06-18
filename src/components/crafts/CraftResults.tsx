import React from "react";
import { CraftResult } from "../../types/global";
import Image from "next/image";

type CraftResultProps = {
    results: CraftResult[];
};

const CraftResults = ({ results }: CraftResultProps) => {
    console.log(results);

    return (
        <div className="text-white/70 flex flex-col gap-1">
            {results.map(result => {
                const formattedPrice = result.price.split(" ")[0];
                const priceDifference = (parseFloat(result.price.split(" ")[0].replace("$", "")) - parseFloat(result.lowest_price.replace("$", ""))) as number;
                return (
                    <a key={result.name} className="p-2 grid grid-cols-5 items-center gap-4 bg-zinc-900 rounded-sm shadow-sm shadow-slate-700" href={result.market_url} target="_blank">
                        <div className="relative w-24 aspect-square">
                            <Image src={result.img_src} sizes="24rem" fill alt="result skin" />
                        </div>
                        <h4 className="col-span-3">{result.name}</h4>
                        <div className="flex flex-col">
                            <div className="text-indigo-600 grid grid-cols-2">
                                <span>price</span>
                                <span>{result.price.split(" ")[0]}</span>
                            </div>
                            <div className="text-emerald-600 grid grid-cols-2">
                                <span>low</span>
                                <span>{result.lowest_price}</span>
                            </div>
                            <div className="text-rose-600 grid grid-cols-2">
                                <span>diff</span>
                                <span>${priceDifference.toFixed(2)}</span>
                            </div>
                        </div>
                    </a>
                );
            })}
        </div>
    );
};

export default CraftResults;
