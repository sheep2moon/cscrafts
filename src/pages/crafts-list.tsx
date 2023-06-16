import React, { useEffect } from "react";
import { getUserId, getUserList, supabase } from "../supabase";
import { Session } from "@supabase/gotrue-js/src/lib/types";
import { useQuery } from "react-query";
import Loading from "../components/common/Loading";
import { DbCraft } from "../types/supabase-db-types";
import Checkbox from "../components/common/Checkbox";
import { exteriorsTags } from "../constants/search-query-tags";
import Image from "next/image";
import { getTypeTagTitle, getWeaponByTag } from "../helpers/convert-from-tag";
import { Weapon } from "../types/global";
import Craft from "../components/crafts/Craft";

const CraftsList = () => {
    const { data: userId } = useQuery("getUserId", getUserId);
    const craftsList = useQuery("getUserList", () => getUserList(userId as string), { enabled: !!userId });

    return (
        <div>
            {craftsList.isLoading && <Loading />}
            {craftsList.data?.map((craft: DbCraft) => (
                <Craft dbCraft={craft} key={craft.id} />
            ))}
        </div>
    );
};

export default CraftsList;
