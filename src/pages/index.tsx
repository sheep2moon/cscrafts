import Image from "next/image";
import { Inter } from "next/font/google";
import { StickersData, WeaponsData } from "../types/global";
import StickersSelector from "../components/homepage/StickersSelector";
import WeaponSelector from "../components/homepage/WeaponSelector";

const inter = Inter({ subsets: ["latin"] });

type HomeProps = {
    stickersData: StickersData;
    weaponsData: WeaponsData;
};

export default function Home() {
    return (
        <main className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}>
            <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
                <WeaponSelector />
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
