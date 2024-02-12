import React, { useEffect, useState } from "react";
import StickersSelector from "../components/homepage/StickersSelector";
import { Sticker } from "../types/global";
import MovableSticker from "../components/movable-sticker";
import Button from "../components/common/Button";

export type MovableStickerType = Sticker & {
    zindex: number;
    rotation: number;
};

const StickersPlacementPage = () => {
    const [activeStickers, setActiveStickers] = useState<Array<MovableStickerType>>([]);
    const addSticker = (sticker: Sticker) => {
        setActiveStickers(prev => [...prev, { ...sticker, zindex: activeStickers.length, rotation: 0 }]);
    };

    const bringToFront = (index: number) => {
        const highestZ = activeStickers.length - 1;
        const oldZ = activeStickers[index].zindex;
        setActiveStickers(prev => {
            const newStickers = prev.map((sticker, i) => {
                if (index === i) return { ...sticker, zindex: highestZ };
                else if (sticker.zindex > oldZ) return { ...sticker, zindex: sticker.zindex - 1 };
                else return sticker;
            });
            console.log(newStickers);

            return newStickers;
        });
    };

    const updateRotation = (inedx: number, angle: number) => {};

    return (
        <div className="flex flex-col items-center max-w-screen-2xl mx-auto pb-8">
            <div className="bg-primary-800 m-4 w-[900px] h-[400px] relative rounded-lg">
                {activeStickers.map((sticker, index) => (
                    <MovableSticker onStartDragging={() => bringToFront(index)} sticker={sticker} key={`sticker-${index + 1}`} />
                ))}
            </div>
            <div>
                <Button onClick={() => setActiveStickers([])}>Reset</Button>
            </div>
            <StickersSelector onSelect={addSticker} />
        </div>
    );
};

export default StickersPlacementPage;
