import Image from "next/image";
import { Inter } from "next/font/google";
import { StickersData, WeaponsData } from "../types/global";
import StickersSelector from "../components/homepage/StickersSelector";
import WeaponSelector from "../components/homepage/WeaponSelector";
import CraftSummary from "../components/homepage/CraftSummary";
import AuthModals from "../components/homepage/AuthModals";
import { useEffect, useState } from "react";
import { supabase } from "../supabase";
import { Session } from "@supabase/gotrue-js/src/lib/types";
import Account from "../components/homepage/Account";

const inter = Inter({ subsets: ["latin"] });

type HomeProps = {
    stickersData: StickersData;
    weaponsData: WeaponsData;
};

export default function Home() {
    const [session, setSession] = useState<Session | null>(null);

    useEffect(() => {
        supabase.auth.getSession().then(({ data: { session } }) => {
            setSession(session);
        });
        supabase.auth.onAuthStateChange((_event, session) => {
            setSession(session);
        });
    }, []);

    return (
        <main className={`flex min-h-screen flex-col items-center justify-between p-4 ${inter.className}`}>
            {session ? <Account session={session} /> : <AuthModals />}
            <div className="mt-12 w-full max-w-5xl font-mono text-sm flex flex-col">
                <WeaponSelector />
                <StickersSelector />
                <CraftSummary session={session} />
            </div>
        </main>
    );
}

// export async function getStaticProps() {

//     const [session, setSession] = useState<Session | null>(null);

//     useEffect(() => {
//         supabase.auth.getSession().then(({ data: { session } }) => {
//             setSession(session);
//         });
//         supabase.auth.onAuthStateChange((_event, session) => {
//             setSession(session);
//         });
//     }, []);

//     return {
//         props: {
//             stickersData,
//             weaponsData
//         }
//     };
// }
