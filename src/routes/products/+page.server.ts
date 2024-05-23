
import { supabase } from "$lib/supabaseClient";

export async function load() {
    const Products = await supabase.from("Product").select();
    const Category = await supabase.from("Category").select();
    return {
        Products: Products.data ?? [],
        Categories: Category.data ?? [],
    };
}
