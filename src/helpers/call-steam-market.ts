import { Craft, Sticker } from "../types/global";

export const weaponsTag = {
    stattrak: "tag_strange",
    souvenir: "tag_tournament",
    any: ""
};

export const searchCraft = (craft: Craft) => {
    window.open(generateSearchstring(craft), "_blank");
};

const ex =
    "https://steamcommunity.com/market/search?q=%22FaZe%20Clan%20Paris%202023%22&descriptions=1&category_730_ItemSet%5B%5D=any&category_730_Exterior%5B%5D=tag_WearCategory0&category_730_Weapon%5B%5D=tag_weapon_ak47&category_730_Quality%5B%5D=tag_strange#p1_price_asc";

const getExteriorParams = (exteriors: number[]) => {
    let query = "";
    exteriors.forEach(wearCategory => {
        query += `&category_730_Exterior%5B%5D=tag_WearCategory${wearCategory}`;
    });

    return query;
};

const getStickersParams = (stickers: Array<Sticker | null>) => {
    const stickerNames = stickers.map(sticker => {
        if (sticker) return sticker.name;
    });
    let query = stickerNames.join(",");
    return encodeURI(query);
    // stickers.forEach((sticker, index) => {
    //     query += encodeURI(sticker.name);
    //     if (index + 1 < stickers.length) {
    //         query += ",";
    //     }
    //     query += "%22";
    // });
};

function generateSearchstring(craft: Craft) {
    return (
        'http://steamcommunity.com/market/search?q="' +
        getStickersParams(craft.stickers) +
        '"&descriptions=1&category_730_ItemSet%5B%5D=any' +
        getExteriorParams(craft.exteriors) +
        "&category_730_Weapon%5B%5D=tag_weapon_" +
        craft.weapon.toLowerCase() +
        "&category_730_Quality%5B%5D=" +
        weaponsTag.any +
        "#p1_price_asc"
    );
}
