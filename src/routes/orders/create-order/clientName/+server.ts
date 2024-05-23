import { json } from '@sveltejs/kit';
import * as database from '$lib/server/carItems.js';
import ClientName from '../clientName.svelte';

export async function POST({ request, cookies }) {
    try {
        const { clientName }: { clientName: string } = await request.json();
        const userid = cookies.get('userid');

        if (!userid) {
            return json({ error: 'User ID is missing' }, { status: 400 });
        }

        if (!clientName) {
            return json({ error: 'Client name is missing' }, { status: 400 });
        }

        await database.setClientName({ userid, clientName });

        return json({ status: 201, message: 'Client name set successfully' });
    } catch (error) {
        console.error('Error setting client name:', error);
        return json({ error: 'Internal Server Error' }, { status: 500 });
    }
}

export async function GET({ request, cookies }) {
    const userid = cookies.get('userid');

    if (!userid) {
        return json({ error: 'User ID is missing' }, { status: 400 });
    }
   const res = await database.getClientName(userid);

    return json({ clientName: res.clientName })
}