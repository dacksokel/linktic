
import { supabase } from "$lib/supabaseClient";

export async function load() {

    const { data, error } = await supabase
        .from('Customer')
        .select(`
    email,
    orders_count:Order(count)
  `);

    if (error) {
        console.error("Error fetching orders with details:", error);
        return [];
    }

    console.log(data)
    return { Customer: data };

}
