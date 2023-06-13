import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://afpfgykkueezringnqvb.supabase.co";
const supabaseKey = process.env.SUPABASE_KEY as string;
const supabase = createClient(supabaseUrl, supabaseKey);
