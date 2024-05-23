import { fail } from '@sveltejs/kit'
import { supabase } from "$lib/supabaseClient";


type Product = {
    name: string,
    price: number,
    stock_quantity: number,
    category_id: number
}

export async function load() {
    const { data } = await supabase.from("Category").select();

    return {
        Category: data ?? [],
    };
}


export const actions = {
    addProduct: async ({ request }) => {
        const formData = await request.formData()
        const name = String(formData.get('name'))
        const price = String(formData.get('price'))
        const stock_quantity = String(formData.get('stock_quantity'))
        const category_id = String(formData.get('category'))
        const description = String(formData.get('description'))

        
        
        if (!name || !price || !stock_quantity || !category_id || !description
        ) {
            return fail(400, { name, missing: true })
        }

        const res = await supabase.from("Product").insert({ name, price, stock_quantity, category_id, description });
    
        return { success: res.statusText === 'Created' ? true : false }
    }
}
