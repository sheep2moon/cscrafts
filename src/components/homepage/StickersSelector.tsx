import React, { useEffect, useMemo, useState } from "react";
import { useQuery } from "react-query";
import { Sticker, StickersData } from "../../types/global";
import fs from "fs";
import path from "path";
import type { GetStaticProps } from "next";
import { getStickerCollection, getStickerCollections } from "../../call-api/get-stickers";
import clsx from "clsx";
import Image from "next/image";
import { useCraftsStore } from "../../state-store/craftStore";
import stickersData from "../../../data/stickers_data.json";
import { ScrollArea } from "../ui/scroll-area";

type StickerCollectionKey = keyof typeof stickersData.data;
type StickerCollection = {
    name: string;
    img_src: string;
}[];

type StickerSelectorProps = {
    onSelect: (sticker: Sticker) => void;
};

const StickersSelector = (props: StickerSelectorProps) => {
    const [selectedCollection, setSelectedCollection] = useState<StickerCollectionKey>("Paris 2023 Teams");
    const [stickerCollection, setStickerCollection] = useState<StickerCollection | null>(stickersData.data[selectedCollection]);

    const handleSelectCollection = (collectionName: StickerCollectionKey) => {
        setSelectedCollection(collectionName);
    };

    const handleSelectSticker = (sticker: Sticker) => {
        props.onSelect(sticker);
    };

    useEffect(() => {
        // console.log(Object.keys(stickersData.data));
        setStickerCollection(stickersData.data[selectedCollection]);
    }, [selectedCollection]);

    return (
        <div className="w-full grid grid-cols-3 mt-8 text-primary bg-primary-800 border-2 border-primary-600 rounded-md">
            <ScrollArea className="h-[400px]">
                {Object.keys(stickersData.data).map(collection => (
                    <div
                        className={clsx("p-2 w-full cursor-pointer text-center rounded-sm text-sm text-white/60", { "outline  bg-primary-600 outline-primary-700 text-white  ": selectedCollection === collection })}
                        onClick={() => handleSelectCollection(collection as StickerCollectionKey)}
                        key={collection}
                    >
                        {collection}
                    </div>
                ))}
            </ScrollArea>
            <ScrollArea className="col-span-2 bg-primary-700 max-h-[400px] gap-2 w-full">
                <div className="grid grid-cols-4 gap-1 p-4">
                    {stickerCollection &&
                        stickerCollection.map((sticker: Sticker) => (
                            <div onClick={() => handleSelectSticker(sticker)} className="flex flex-col items-center  justify-center gap-2" key={sticker.name}>
                                <div className="relative w-28 h-28 bg-primary-800/50">
                                    <Image src={sticker.img_src} className="w-auto h-auto" sizes="28rem" fill alt="weapon skin" />
                                </div>
                                <h4>{sticker.name}</h4>
                            </div>
                        ))}
                </div>
            </ScrollArea>
        </div>
    );
};

export default StickersSelector;

export async function getStaticProps() {
    return {
        props: {}
    };
}
