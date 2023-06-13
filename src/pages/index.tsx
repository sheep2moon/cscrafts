import Image from "next/image";
import { Inter } from "next/font/google";
import { StickersData, WeaponsData } from "../types/global";
import StickersSelector from "../components/homepage/StickersSelector";
import WeaponSkinsSelector from "../components/homepage/WeaponSkinsSelector";
import WeaponSelector from "../components/homepage/WeaponSelector";
import CraftSummary from "../components/homepage/CraftSummary";
import SignIn from "../components/homepage/SignIn";

const inter = Inter({ subsets: ["latin"] });

type HomeProps = {
    stickersData: StickersData;
    weaponsData: WeaponsData;
};

export default function Home() {
    return (
        <main className={`flex min-h-screen flex-col items-center justify-between p-4 ${inter.className}`}>
            <SignIn />
            <div className="z-10 w-full max-w-5xl font-mono text-sm flex flex-col">
                <WeaponSelector />
                {/* <WeaponSkinsSelector /> */}
                <StickersSelector />
                <CraftSummary />
            </div>
        </main>
    );
}

// export async function getStaticProps() {
//     const stickersPath = path.join(process.cwd(), "data", "stickers_data.json");
//     const weaponsPath = path.join(process.cwd(), "data", "weapons_data.json");
//     const jsonStickers = fs.readFileSync(stickersPath, "utf-8");
//     const jsonWeapons = fs.readFileSync(weaponsPath, "utf-8");
//     const stickersData: StickersData = JSON.parse(jsonStickers);
//     const weaponsData = JSON.parse(jsonWeapons);

//     return {
//         props: {
//             stickersData,
//             weaponsData
//         }
//     };
// }
