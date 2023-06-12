import { Craft } from "../types/global";
import { apiUrl } from "./get-weapons";

export const searchCrafts = async (craft: Craft) => {
    const res = await fetch(apiUrl + "/craft-search", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(craft) });
    const data = await res.json();
    console.log(data);
};
