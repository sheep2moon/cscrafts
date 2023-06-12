import React, { useState } from "react";
import { useQuery } from "react-query";
import { getWeaponNames } from "../../call-api/get-weapons";
import clsx from "clsx";
import { Weapon } from "../../types/global";
import Image from "next/image";
import { useCraftsStore } from "../../state-store/craftStore";

const weaponTypes = [
    {
        name: "pistols",
        title: "Pistols"
        // icon: "/weapon-icons/pistol.svg"
    },
    {
        name: "rifles",
        title: "Rifles"
        // icon: "/weapon-icons/rifle.svg"
    },
    {
        name: "smgs",
        title: "SMGs"
        // icon: "/weapon-icons/smgs.svg"
    },
    {
        name: "heavy",
        title: "Heavy"
        // icon: "/weapon-icons/heavy.svg"
    }
];

const WeaponSelector = () => {
    const [selectedWeaponType, setSelectedWeaponType] = useState(weaponTypes[0].name);
    const { selectedWeapon, stickers, setSticker, setSelectedWeapon } = useCraftsStore(state => state);
    const weaponNames = useQuery(["weapon-names", selectedWeaponType], () => getWeaponNames(selectedWeaponType), {
        enabled: !!selectedWeaponType
    });

    return (
        <>
            <div className="flex flex-col">
                <div className="flex items-center justify-around mb-8">
                    {weaponTypes.map(weaponType => (
                        <div
                            key={weaponType.name}
                            className={clsx("p-2 text-xl cursor-pointer", { "text-white font-bold": selectedWeaponType === weaponType.name, "text-white/60 ": selectedWeaponType !== weaponType.name })}
                            onClick={() => setSelectedWeaponType(weaponType.name)}
                        >
                            {/* <div className="w-12 aspect-square relative">
                                <Image src={weaponType.icon} alt="weapon type icon" fill />
                            </div> */}
                            <h3>{weaponType.title}</h3>
                        </div>
                    ))}
                </div>
                <div className="col-span-2 grid grid-cols-6  gap-2 items-start justify-start content-start transition-all h-[200px]">
                    {weaponNames.isSuccess &&
                        weaponNames.data.map(weapon => (
                            <div
                                className={clsx("hover:bg-slate-600/10  flex flex-col justify-center items-center rounded-sm ", { "bg-slate-600/20 outline outline-slate-300/20 ": selectedWeapon?.name === weapon.name })}
                                onClick={() => setSelectedWeapon(weapon)}
                                key={weapon.name}
                            >
                                <h3>{weapon.name}</h3>
                                <div className="w-16 relative aspect-square">
                                    <Image src={weapon.img_src} fill alt="weapon default skin" />
                                </div>
                            </div>
                        ))}
                </div>
            </div>
        </>
    );
};

export default WeaponSelector;
