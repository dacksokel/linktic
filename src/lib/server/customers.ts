import { supabase } from "$lib/supabaseClient";


export async function findAll() {
    const customers = await supabase.from("Customer").select();

    return customers
}

export async function findByEmail(email: string) {
    const customer = await supabase.from("Customer").select().eq('email', email)

    if (!customer) {
        return false;
    }

    if (customer.data.length === 0) {
        console.log('this customer not fount go to create')
        const createCustomer: any = await createCustomers(email)        
        return { ...createCustomer }
    }

    return { ...customer }
}

export async function createCustomers(email: string) {
    const res = await supabase.from('Customer').insert({ email }).select()
    if (res.statusText !== 'Created') {
        return { error: res.error }
    }

    return { ...res }
}