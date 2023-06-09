import React, { useEffect, useMemo, useState } from "react";
import { useQuery } from "react-query";
import { Sticker, StickersData } from "../../types/global";
import fs from "fs";
import path from "path";
import type { GetStaticProps } from "next";
import { getStickerCollections } from "../../call-api/get-stickers";

type StickersSelectorProps = { stickersData: StickersData };

const StickersSelector = () => {
    const [selectedCollection, setSelectedCollection] = useState("");
    const stickerCollections = useQuery("stickerCollections", getStickerCollections);

    return (
        <div className="w-full grid grid-cols-3 mt-8">
            <div className="max-h-[400px] col-span-1 overflow-y-scroll">{stickerCollections.isSuccess && stickerCollections.data.map(collection => <div key={collection}>{collection}</div>)}</div>
        </div>
    );
};

export default StickersSelector;

export async function getStaticProps() {
    return {
        props: {}
    };
}
