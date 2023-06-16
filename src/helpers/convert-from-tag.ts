import { typeTags } from "../constants/search-query-tags";
import { weaponCategories } from "../constants/weapon-categories";
import { Weapon } from "../types/global";

export const getWeaponByTag = (weaponTag: string) => {
    let matchingWeapon: Weapon | null = { name: "", img_src: "", tag: "" };
    Object.entries(weaponCategories).forEach(([key, weaponType]) => {
        weaponType.weapons.forEach(weapon => {
            if (weapon.tag === weaponTag) {
                matchingWeapon = weapon as Weapon;
            }
        });
    });
    return matchingWeapon;
};

export const getTypeTagTitle = (typeTag: string) => {
    let title = "";
    typeTags.forEach(tag => {
        if (tag.tag === typeTag) title = tag.title;
    });
    return title;
};

// export const typeTags = [
//     { title: "Any", tag: "" },
//     { title: "StatTrak", tag: "tag_strange" },
//     { title: "Souvenir", tag: "tag_tournament" }
// ];
