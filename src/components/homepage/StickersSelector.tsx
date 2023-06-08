import React, { useEffect, useMemo, useState } from "react";
import { useQuery } from "react-query";
import { Sticker, StickersData } from "../../types/global";
import fs from "fs";
import path from "path";
import type { GetStaticProps } from "next";

type StickersSelectorProps = { stickersData: StickersData };

const StickersSelector = () => {
    return (
        <div>
            <div></div>
        </div>
    );
};

export default StickersSelector;

export async function getStaticProps() {
    return {
        props: {}
    };
}
