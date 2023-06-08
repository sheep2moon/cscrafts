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

export type WeaponsData = {
    data: {
        pistols: [
            {
                [key: string]: Weapon;
            }
        ];
        rifles: [
            {
                [key: string]: Weapon;
            }
        ];
        smgs: [
            {
                [key: string]: Weapon;
            }
        ];
        heavy: [
            {
                [key: string]: Weapon;
            }
        ];
    };
};
