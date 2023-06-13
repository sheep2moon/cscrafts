import React from "react";
import { Session } from "@supabase/gotrue-js/src/lib/types";
import Button from "../common/Button";
import { supabase } from "../../supabase";
import Link from "next/link";

type AccountProps = {
    session: Session;
};

const Account = ({ session }: AccountProps) => {
    const handleLogout = async () => {
        const { error } = await supabase.auth.signOut();
    };

    return (
        <div className="flex items-center gap-8">
            <div>
                <Link className="p-4 rounded-sm bg-indigo-700/80" href="/crafts-list">
                    Crafts List
                </Link>
            </div>
            <div className="">
                <span>{session.user.email}</span>
                <Button onClick={handleLogout}>Wyloguj</Button>
            </div>
        </div>
    );
};

export default Account;
