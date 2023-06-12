import { create } from "zustand";
import { Sticker, WeaponSkin } from "../types/global";

type StickerSlot = {
    id: string;
    sticker: Sticker | null;
};

type CraftsStore = {
    selectedWeapon: WeaponSkin | null;
    stickerSlots: Array<StickerSlot>;
    setSelectedWeapon: (weapon: WeaponSkin) => void;
    addSticker: (sticker: Sticker) => void;
};

export const useCraftsStore = create<CraftsStore>(set => ({
    selectedWeapon: { name: "", img_src: "" },
    stickerSlots: [
        { id: "slot-1", sticker: null },
        { id: "slot-2", sticker: null },
        { id: "slot-3", sticker: null },
        { id: "slot-4", sticker: null }
    ],
    setSelectedWeapon: weapon => set(state => ({ ...state, selectedWeapon: weapon })),
    addSticker: sticker =>
        set(state => {
            const emptySlotIndex = state.stickerSlots.findIndex(slot => slot.sticker === null);
            const newSlots = [...state.stickerSlots];
            console.log(newSlots);

            if (emptySlotIndex !== -1) {
                newSlots[emptySlotIndex] = { id: state.stickerSlots[emptySlotIndex].id, sticker };
            }
            return { ...state, stickerSlots: newSlots };
        })
}));
