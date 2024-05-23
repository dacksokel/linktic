import { json } from '@sveltejs/kit';
import * as orders from '$lib/server/orders.js';

export async function POST({ cookies }) { 
    console.log('to save the order')


    const userid = cookies.get('userid');

    if (!userid) {
        return json({ error: 'User ID is missing' }, { status: 400 });
    }

    await orders.createOrder(userid)

    return json({ status: 201, message: 'Client name set successfully' });
}