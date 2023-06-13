type WeaponCategories = {
    [key: string]: {
        title: string;
        weapons: {
            name: string;
            tag: string;
            img_src: string;
        }[];
    };
};

export const weaponCategories: WeaponCategories = {
    pistols: {
        title: "Pistols",
        weapons: [
            {
                name: "CZ75-Auto",
                tag: "tag_weapon_cz75a",
                img_src: "https://csgostash.com/img/weapons/50px/cz75-auto.png?id=e98713d045fe8f286f82feb8e5f738f1"
            },
            {
                name: "Desert Eagle",
                tag: "tag_weapon_deagle",
                img_src: "https://csgostash.com/img/weapons/50px/desert_eagle.png?id=296ba0537798c8d01688b810331bff72"
            },
            {
                name: "Dual Berettas",
                tag: "tag_weapon_elite",
                img_src: "https://csgostash.com/img/weapons/50px/dual_berettas.png?id=686b70f70c55df0ad83c8e86a79c7285"
            },
            {
                name: "Five-Seven",
                tag: "tag_weapon_fiveseven",
                img_src: "https://csgostash.com/img/weapons/50px/five-seven.png?id=113b6c875c9e5789086d77a13a270ac0"
            },
            {
                name: "Glock-18",
                tag: "tag_weapon_glock",
                img_src: "https://csgostash.com/img/weapons/50px/glock-18.png?id=f797c263dece95782a333f94613f0c77"
            },
            {
                name: "P2000",
                tag: "tag_weapon_hkp2000",
                img_src: "https://csgostash.com/img/weapons/50px/p2000.png?id=eb0a9549104f2cb49d76b9cdbdfdced6"
            },
            {
                name: "P250",
                tag: "tag_weapon_p250",
                img_src: "https://csgostash.com/img/weapons/50px/p250.png?id=e83f91aed018c0aae4ffbd99733d6b68"
            },
            {
                name: "R8 Revolver",
                tag: "tag_weapon_revolver",
                img_src: "https://csgostash.com/img/weapons/50px/r8_revolver.png?id=81cf60dffee76b114dfdecf6bc3b462f"
            },
            {
                name: "Tec-9",
                tag: "tag_weapon_tec9",
                img_src: "https://csgostash.com/img/weapons/50px/tec-9.png?id=351bc64fa2ff5db7ce737571996c5a12"
            },
            {
                name: "USP-S",
                tag: "tag_weapon_usp_silencer",
                img_src: "https://csgostash.com/img/weapons/50px/usp-s.png?id=af0de75012384b6dd9e72414a5f82a1e"
            }
        ]
    },
    rifles: {
        title: "Rifles",
        weapons: [
            {
                name: "AK-47",
                tag: "tag_weapon_ak47",
                img_src: "https://csgostash.com/img/weapons/50px/ak-47.png?id=18d8c10145c6aa7f792098aacd9d3afd"
            },
            {
                name: "AUG",
                tag: "tag_weapon_aug",
                img_src: "https://csgostash.com/img/weapons/50px/aug.png?id=51d10f61543c5463dd0ae0ed0f394d9d"
            },
            {
                name: "AWP",
                tag: "tag_weapon_awp",
                img_src: "https://csgostash.com/img/weapons/50px/awp.png?id=41ff15893fd4141e189379db3fb51086"
            },
            {
                name: "FAMAS",
                tag: "tag_weapon_famas",
                img_src: "https://csgostash.com/img/weapons/50px/famas.png?id=6e63359fd3f645895d7535504778bd54"
            },
            {
                name: "G3SG1",
                tag: "tag_weapon_g3sg1",
                img_src: "https://csgostash.com/img/weapons/50px/g3sg1.png?id=02e03e880aea992d4cfe6fd5e30697a2"
            },
            {
                name: "Galil AR",
                tag: "tag_weapon_galilar",
                img_src: "https://csgostash.com/img/weapons/50px/galil_ar.png?id=fecdacfcd9041bd2479a297009c83454"
            },
            {
                name: "M4A1-S",
                tag: "tag_weapon_m4a1_silencer",
                img_src: "https://csgostash.com/img/weapons/50px/m4a1-s.png?id=11a15e14fb0c39a05992905c03f50e69"
            },
            {
                name: "M4A4",
                tag: "tag_weapon_m4a1",
                img_src: "https://csgostash.com/img/weapons/50px/m4a4.png?id=62649da2290a280aff51d48fe589922b"
            },
            {
                name: "SCAR-20",
                tag: "tag_weapon_scar20",
                img_src: "https://csgostash.com/img/weapons/50px/scar-20.png?id=5913ecc43cca089a04bd2bfe1bb2e50c"
            },
            {
                name: "SG 553",
                tag: "tag_weapon_sg556",
                img_src: "https://csgostash.com/img/weapons/50px/sg_553.png?id=2b65610339185a402e465adc35e5bb8f"
            },
            {
                name: "SSG 08",
                tag: "tag_weapon_ssg08",
                img_src: "https://csgostash.com/img/weapons/50px/ssg_08.png?id=2e2b8d71ba9949e192739aa92de353df"
            }
        ]
    },
    smgs: {
        title: "SMG's",
        weapons: [
            {
                name: "MAC-10",
                tag: "tag_weapon_mac10",
                img_src: "https://csgostash.com/img/weapons/50px/mac-10.png?id=e989a87ce481808b1cca6d88bb969610"
            },
            {
                name: "MP5-SD",
                tag: "tag_weapon_mp5sd",
                img_src: "https://csgostash.com/img/weapons/50px/mp5-sd.png?id=837afb49b1d93522fc563ebe48b63e4d"
            },
            {
                name: "MP7",
                tag: "tag_weapon_mp7",
                img_src: "https://csgostash.com/img/weapons/50px/mp7.png?id=4f5536f1046ea94fa7916528c1513044"
            },
            {
                name: "MP9",
                tag: "tag_weapon_mp9",
                img_src: "https://csgostash.com/img/weapons/50px/mp9.png?id=0318e32a9ab8ce3cc6b3aee0e962a9e6"
            },
            {
                name: "PP-Bizon",
                tag: "tag_weapon_bizon",
                img_src: "https://csgostash.com/img/weapons/50px/pp-bizon.png?id=3a22b17637bf56ee4f2c10fa51eef3b3"
            },
            {
                name: "P90",
                tag: "tag_weapon_p90",
                img_src: "https://csgostash.com/img/weapons/50px/p90.png?id=29565ca1d9103d5b893af935ad6ca2a5"
            },
            {
                name: "UMP-45",
                tag: "tag_weapon_ump45",
                img_src: "https://csgostash.com/img/weapons/50px/ump-45.png?id=2281fa49f4441c275471c625cc60f8a7"
            }
        ]
    },
    heavy: {
        title: "Heavy",
        weapons: [
            {
                name: "MAG-7",
                tag: "tag_weapon_mag7",
                img_src: "https://csgostash.com/img/weapons/50px/mag-7.png?id=9b300897396ecf77b65484ca5cad470a"
            },
            {
                name: "Nova",
                tag: "tag_weapon_nova",
                img_src: "https://csgostash.com/img/weapons/50px/nova.png?id=ed2cdde184bb60dba4369961f5dd2845"
            },
            {
                name: "Sawed-Off",
                tag: "tag_weapon_sawedoff",
                img_src: "https://csgostash.com/img/weapons/50px/sawed-off.png?id=29113fb31c1a12317bfa4036cfd52f58"
            },
            {
                name: "XM1014",
                tag: "tag_weapon_xm1014",
                img_src: "https://csgostash.com/img/weapons/50px/xm1014.png?id=f9cec969bf81f3630b45c85c866348c1"
            },
            {
                name: "M249",
                tag: "tag_weapon_m249",
                img_src: "https://csgostash.com/img/weapons/50px/m249.png?id=cfd23b3dbbf2e87f8dd6938d823d0b8d"
            },
            {
                name: "Negev",
                tag: "tag_weapon_negev",
                img_src: "https://csgostash.com/img/weapons/50px/negev.png?id=bf9b06c01aa7320e090cb27a1cf33904"
            }
        ]
    }
};
