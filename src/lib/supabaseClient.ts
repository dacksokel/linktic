
import { createClient } from "@supabase/supabase-js";
import { PRIVATE_SUPABASE_URL, PRIVATE_SUPABASE_ANON_KEY } from '$env/static/private';


const supabaseUrl = PRIVATE_SUPABASE_URL;
const supabaseKey = PRIVATE_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseKey);
