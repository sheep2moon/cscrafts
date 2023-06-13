import { createClient } from "@supabase/supabase-js";
import { Session } from "@supabase/gotrue-js/src/lib/types";
import { DbCraft } from "./types/supabase-db-types";

const supabaseUrl = "https://afpfgykkueezringnqvb.supabase.co";
const supabaseKey = process.env.supabaseKey as string;

export const supabase = createClient(supabaseUrl, supabaseKey);

export const getUserList = async (userId: string) => {
    let res = await supabase.from("crafts").select("*").eq("owner_id", userId);
    const crafts = res.data as DbCraft[];
    return crafts;
};

export const getUserId = async () => {
    const res = await supabase.auth.getSession();
    console.log(res);

    const session: Session | null = res.data.session;
    return session?.user.id;
};
