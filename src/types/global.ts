export type Sticker = {
    name: string;
    img_src: string;
};

export type StickersData = {
    data: {
        [key: string]: Sticker[];
    };
};

export type Weapon = {
    name: string;
    img_src: string;
    tag: string;
};

export type WeaponSkin = {
    name: string;
    img_src: string;
};

export type WeaponsData = {
    data: {
        [key: string]: WeaponSkin;
    };
};

export type Craft = {
    weapon_tag: string;
    exteriors: number[];
    stickers: Array<string>;
    type_tag: string;
};

export type CraftResult = {
    name: string;
    price: string;
    img_src: string;
    market_url: string;
    lowest_price: string;
    median_price: string;
};
