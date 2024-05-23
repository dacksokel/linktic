
import { supabase } from "$lib/supabaseClient";

export async function load({params}) {
    const { category_id } = params;
    
    const Products = await supabase.from("Product").select().eq('category_id', category_id);
    const Category = await supabase.from("Category").select();
    return {
        Products: Products.data ?? [],
        Categories: Category.data ?? [],
        category_id: parseInt(category_id)
    };
}
