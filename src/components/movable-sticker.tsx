import React, { useState } from "react";
import { Sticker } from "../types/global";
import Image from "next/image";
import { MovableStickerType } from "../pages/stickers-placement";

type Position = {
    x: number;
    y: number;
};

type MovableStickerProps = {
    sticker: MovableStickerType;
    onStartDragging: () => void;
};

const MovableSticker = (props: MovableStickerProps) => {
    const [position, setPosition] = useState<Position>({ x: 0, y: 0 });
    const [isDragging, setIsDragging] = useState(false);

    const startDrag = (e: React.MouseEvent) => {
        setIsDragging(true);
        props.onStartDragging();
        e.preventDefault(); // Prevent image drag behavior
    };

    const onDrag = (e: React.MouseEvent) => {
        if (isDragging) {
            setPosition(prevPosition => ({
                x: prevPosition.x + e.movementX,
                y: prevPosition.y + e.movementY
            }));
        }
    };

    const endDrag = () => {
        setIsDragging(false);
    };

    return (
        <Image
            onMouseDown={startDrag}
            onMouseMove={onDrag}
            onMouseUp={endDrag}
            onMouseLeave={endDrag}
            className="absolute hover:bg-white/10"
            style={{
                left: position.x,
                top: position.y,
                zIndex: props.sticker.zindex
            }}
            src={props.sticker.img_src}
            alt="cs_sticker"
            width={200}
            height={200}
        />
    );
};

export default MovableSticker;
