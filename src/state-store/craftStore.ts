import { create } from "zustand";
import { Sticker, WeaponSkin } from "../types/global";

type CraftsStore = {
    selectedWeapon: WeaponSkin | null;
    stickers: Sticker[];
    setSelectedWeapon: (weapon: WeaponSkin) => void;
    setSticker: (sticker: Sticker, stickerIndex: number) => void;
};

export const useCraftsStore = create<CraftsStore>(set => ({
    selectedWeapon: { name: "", img_src: "" },
    stickers: [],
    setSelectedWeapon: weapon => set(state => ({ ...state, selectedWeapon: weapon })),
    setSticker: (sticker, stickerIndex) =>
        set(state => {
            const newStickers = [...state.stickers];
            newStickers[stickerIndex] = sticker;
            return { ...state, stickers: newStickers };
        })
}));
