import { create } from "zustand";
import { Sticker, Weapon, WeaponSkin } from "../types/global";

type StickerSlot = {
    id: string;
    sticker: Sticker | null;
};

type CraftsStore = {
    selectedWeapon: Weapon | null;
    stickerSlots: Array<StickerSlot>;
    setSelectedWeapon: (weapon: Weapon) => void;
    addSticker: (sticker: Sticker) => void;
    removeSticker: (slotIndex: number) => void;
};

export const useCraftsStore = create<CraftsStore>(set => ({
    selectedWeapon: { name: "", img_src: "", tag: "" },
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
        }),
    removeSticker: slotIndex =>
        set(state => ({
            ...state,
            stickerSlots: state.stickerSlots.map((slot, index): StickerSlot => {
                if (index === slotIndex) return { id: state.stickerSlots[index].id, sticker: null };
                else return slot;
            })
        }))
}));
