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
