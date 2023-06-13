import { Craft, CraftResult } from "../types/global";
import { apiUrl } from "./get-weapons";

export const searchCrafts = async (craft: Craft): Promise<CraftResult[] | false> => {
    const res = await fetch(apiUrl + "/craft-search", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(craft) });
    const data = await res.json();
    if (data?.error) {
        return false;
    } else {
        return data as CraftResult[];
    }
};
