import { Craft, Sticker } from "../types/global";

export const exteriorTags = {
    stattrak: "tag_strange",
    souvenir: "tag_tournament",
    any: ""
};

export const searchCraft = async (craft: Craft) => {
    const stickerNames = craft.stickers.map(sticker => {
        if (sticker) return sticker;
    });
    const stickerQuery = stickerNames.join(",");

    const exteriorQueries = craft.exteriors.map(wearCategory => `&category_730_Exterior%5B%5D=tag_WearCategory${wearCategory}`);
    const exteriorQuery = exteriorQueries.join("");

    const searchQuery =
        'http://steamcommunity.com/market/search?q="' +
        encodeURI(stickerQuery) +
        '"&descriptions=1&category_730_ItemSet%5B%5D=any' +
        exteriorQuery +
        "&category_730_Weapon%5B%5D=tag_weapon_" +
        craft.weapon_tag +
        "&category_730_Quality%5B%5D=" +
        exteriorTags.any +
        "#p1_price_asc";

    const res = await fetch(searchQuery);
    const html = await res.text();

    const parser = new DOMParser();
    const doc = parser.parseFromString(html, "text/html");
    const resultDivs = doc.querySelectorAll(".market_listing_searchresult");
    resultDivs.forEach(resultDiv => {
        const content = resultDiv.textContent;
        console.log(content);
        console.log(resultDiv);
    });

    // window.open(searchQuery, "_blank");
};
