import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { getWeaponNames, getWeaponSkins, getWeaponTypes } from "../../call-api/get-weapons";
import Image from "next/image";
import clsx from "clsx";
import { WeaponSkin } from "../../types/global";

const WeaponSkinsSelector = () => {
    const [selectedWeaponType, setSelectedWeaponType] = useState("");
    const [selectedWeaponName, setSelectedWeaponName] = useState("");
    const [selectedSkin, setSelectedSkin] = useState<WeaponSkin>();
    const weaponTypes = useQuery("weapon-types", getWeaponTypes, {
        onSuccess: data => {
            setSelectedWeaponType(data[1]);
        }
    });
    const weaponNames = useQuery(["weapon-names", selectedWeaponType], () => getWeaponNames(selectedWeaponType), {
        enabled: !!selectedWeaponType,
        onSuccess: data => {
            setSelectedWeaponName(data[0].name);
        }
    });
    const weaponSkins = useQuery(["weapon-skins", selectedWeaponName], () => getWeaponSkins(selectedWeaponType, selectedWeaponName), { enabled: !!selectedWeaponName });

    const handleWeaponTypeSelect = (weaponType: string) => {
        setSelectedWeaponType(weaponType);
        setSelectedWeaponName("");
        // weaponTypes.refetch();
    };

    const handleWeaponSelect = (weapon: WeaponSkin) => {
        setSelectedWeaponName(weapon.name);
        // weaponSkin
    };

    const handleSelectSkin = (skin: WeaponSkin) => {
        setSelectedSkin(skin);
    };

    return (
        <div className="w-full">
            <div className="flex rounded-t-md bg-slate-900/50 mb-2">
                {weaponTypes.isSuccess &&
                    weaponTypes.data.map(weaponType => (
                        <div
                            className={clsx("p-2 w-full cursor-pointer text-center rounded-sm text-xl text-white/60", { "outline  bg-slate-600/20 outline-slate-300/20 text-white  ": selectedWeaponType === weaponType })}
                            onClick={() => handleWeaponTypeSelect(weaponType)}
                            key={weaponType}
                        >
                            {weaponType}
                        </div>
                    ))}
            </div>
            <div className="grid grid-cols-3">
                <div className="col-span-1 scrollbar scrollbar-track-gray-800 scrollbar-thumb-gray-900 max-h-[400px] overflow-y-scroll flex flex-col">
                    <div className="grid grid-cols-1 gap-2">
                        {weaponNames.isSuccess &&
                            weaponNames.data.map(weapon => (
                                <div
                                    className={clsx("hover:bg-slate-600/10 flex p-2 flex-col justify-center items-center gap-2 rounded-sm ", { "bg-slate-600/20 outline outline-slate-300/20 ": selectedWeaponName === weapon.name })}
                                    onClick={() => handleWeaponSelect(weapon)}
                                    key={weapon.name}
                                >
                                    <h3>{weapon.name}</h3>
                                    {/* <div className="w-12 relative aspect-square">
                                    <Image src={weapon.img_src} fill alt="weapon default skin" />
                                </div> */}
                                </div>
                            ))}
                    </div>
                </div>
                <div className="col-span-2 grid grid-cols-4 bg-slate-900/10 max-h-[400px] overflow-y-scroll scrollbar scrollbar-track-gray-800 scrollbar-thumb-gray-900 p-2 gap-2">
                    {weaponSkins.data?.map(skin => (
                        <div className={clsx("flex flex-col items-center justify-center gap-2", { "bg-slate-600/20 outline outline-slate-300/20": selectedSkin?.name === skin.name })} key={skin.name} onClick={() => setSelectedSkin(skin)}>
                            <div className="relative w-24 h-24">
                                <Image src={skin.img_src} className="w-auto h-auto" fill alt="weapon skin" sizes="24" />
                            </div>
                            <h4>{skin.name}</h4>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default WeaponSkinsSelector;
