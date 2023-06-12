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

type StickersSelectorProps = { stickersData: StickersData };

const StickersSelector = () => {
    const [selectedCollection, setSelectedCollection] = useState("");
    const stickerCollections = useQuery("stickerCollections", getStickerCollections);
    const stickerCollection = useQuery(["stickerCollection", selectedCollection], () => getStickerCollection(selectedCollection), { enabled: !!selectedCollection, onSuccess: data => {} });

    const handleSelectCollection = (collectionName: string) => {
        setSelectedCollection(collectionName);
    };

    const { addSticker } = useCraftsStore(state => state);

    return (
        <div className="w-full grid grid-cols-3 mt-8">
            <div className="max-h-[400px] col-span-1 overflow-y-scroll scrollbar scrollbar-track-gray-800 scrollbar-thumb-gray-900">
                {stickerCollections.isSuccess &&
                    stickerCollections.data.map(collection => (
                        <div
                            className={clsx("p-2 w-full cursor-pointer text-center rounded-sm text-sm text-white/60", { "outline  bg-slate-600/20 outline-slate-300/20 text-white  ": selectedCollection === collection })}
                            onClick={() => handleSelectCollection(collection)}
                            key={collection}
                        >
                            {collection}
                        </div>
                    ))}
            </div>
            <div className="col-span-2 grid grid-cols-4 bg-slate-900/10 max-h-[400px] overflow-y-scroll p-2 scrollbar scrollbar-track-gray-800 scrollbar-thumb-gray-900 gap-2">
                {stickerCollection.data?.map((sticker: Sticker) => (
                    <div onClick={() => addSticker(sticker)} className="flex flex-col items-center  justify-center gap-2" key={sticker.name}>
                        <div className="relative w-24 h-24">
                            <Image src={sticker.img_src} className="w-auto h-auto" fill alt="weapon skin" />
                        </div>
                        <h4>{sticker.name}</h4>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default StickersSelector;

export async function getStaticProps() {
    return {
        props: {}
    };
}
