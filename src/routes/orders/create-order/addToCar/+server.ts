import { json } from '@sveltejs/kit';
import * as database from '$lib/server/carItems.js';


type Product = {
    id: number,
    description: string,
    name: string,
    price: number,
    stock_quantity: number,
    category_id: number,
    amount:number
}

export async function POST({ request, cookies }) {
    try {
        const { id, description, name, price, stock_quantity, category_id, amount }: Product = await request.json();

        const userid = cookies.get('userid');

        if (!userid) {
            return json({ error: 'User ID is missing' }, { status: 400 });
        }


        const { total_amount } = await database.setProduct({ id, userid, description, name, price, category_id, stock_quantity, amount });

        return json({ status: 201, message: 'Product adder successfully', total_amount });
    } catch (error) {
        console.error('Error setting client name:', error);
        return json({ error: 'Internal Server Error' }, { status: 500 });
    }
}

export async function GET(request) {
    return json({ status: 'Ok' })
}