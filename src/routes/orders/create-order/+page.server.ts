
import { supabase } from "$lib/supabaseClient";
import * as database from '$lib/server/carItems.js';

export async function load({ cookies }) {

    let userid = cookies.get('userid');

    if (!userid) {
        userid = crypto.randomUUID();
        cookies.set('userid', userid, { path: '/' });
    }

    const { data } = await supabase.from("Product").select();
    return {
        Products: data ?? [],
        CarItem: database.getCarItem(userid)
    };
}
