import { apiUrl } from "./get-weapons";

export const getStickerCollections = async (): Promise<string[]> => {
    const res = await fetch(apiUrl + "/sticker-collections");
    const collections: string[] = await res.json();
    return collections;
};

export const getStickerCollection = async (collection_name: string) => {
    const res = await fetch(apiUrl + "/sticker-collection?collection_name=" + collection_name);
    return await res.json();
};

export const getMatchingStickers = async (query: string, collection_name?: string) => {
    let res;
    if (!!collection_name) {
        res = await fetch(apiUrl + "/sticker-search?query=" + query);
    } else {
        res = await fetch(apiUrl + "/sticker-search?query=" + query + "&collection_name=" + collection_name);
    }
    return await res.json();
};
