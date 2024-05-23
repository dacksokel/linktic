
import { supabase } from "$lib/supabaseClient";

export async function load() {

    const { data, error } = await supabase
        .from('Order')
        .select(`
      id,
      total_amount,
      created_at,
      Customer(email),
      Order_Product:id (        
        product_amount,
        Product (
          name
        )
      )
    `);

    if (error) {
        console.error("Error fetching orders with details:", error);
        return [];
    }

    console.log(data)
    return {Order: data};

}
