import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { getWeaponNames, getWeaponSkins, getWeaponTypes } from "../../call-api/get-weapons";
import Image from "next/image";

const WeaponSelector = () => {
    const [selectedWeaponType, setSelectedWeaponType] = useState("");
    const [selectedWeaponName, setSelectedWeaponName] = useState("");
    const weaponTypes = useQuery("weapon-types", getWeaponTypes);
    const weaponNames = useQuery(["weapon-names", selectedWeaponType], () => getWeaponNames(selectedWeaponType), { enabled: !!selectedWeaponType });
    const weaponSkins = useQuery(["weapon-skins", selectedWeaponName], () => getWeaponSkins(selectedWeaponType, selectedWeaponName), { enabled: !!selectedWeaponName });

    const handleWeaponTypeSelect = (weaponType: string) => {
        setSelectedWeaponType(weaponType);
        setSelectedWeaponName("");
        // weaponTypes.refetch();
    };

    const handleWeaponNameSelect = (weaponName: string) => {
        setSelectedWeaponName(weaponName);
        // weaponSkin
    };

    return (
        <div className="flex gap-4">
            <div>
                {weaponTypes.isSuccess &&
                    weaponTypes.data.map(weaponType => (
                        <div onClick={() => handleWeaponTypeSelect(weaponType)} key={weaponType}>
                            {weaponType}
                        </div>
                    ))}{" "}
            </div>{" "}
            <div>
                {weaponNames.isSuccess &&
                    weaponNames.data.map(weaponName => (
                        <div onClick={() => handleWeaponNameSelect(weaponName)} key={weaponName}>
                            {weaponName}
                        </div>
                    ))}
            </div>
            <div className="grid grid-cols-4">
                {weaponSkins.data?.map(skin => (
                    <div className="flex flex-col items-center justify-center gap-2" key={skin.name}>
                        <div className="relative w-24 h-24">
                            <Image src={skin.img_src} className="w-auto h-auto" fill alt="weapon skin" sizes="24" />
                        </div>
                        <h4>{skin.name}</h4>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default WeaponSelector;
