import { WeaponSkin } from "../types/global";

export const apiUrl = process.env.apiUrl as string;

export const getWeaponTypes = async (): Promise<string[]> => {
    const res = await fetch(apiUrl + "/weapon-types");
    const data: string[] = await res.json();
    return data;
};

export const getWeaponNames = async (weapon_type: string): Promise<{ name: string; img_src: string }[]> => {
    const res = await fetch(apiUrl + "/weapons?weapon_type=" + weapon_type);
    return await res.json();
};

export const getWeaponSkins = async (weapon_type: string, weapon_name: string): Promise<WeaponSkin[]> => {
    const res = await fetch(apiUrl + "/weapon-skins?weapon_type=" + weapon_type + "&weapon_name=" + weapon_name);
    const data: WeaponSkin[] = await res.json();
    return data;
};
