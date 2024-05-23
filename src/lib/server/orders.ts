import { supabase } from "$lib/supabaseClient";
import * as CarItem from "./carItems";
import * as Customer from './customers'

type Customer = {
    id?:number
    email: string;
};

type Product = {
    name: string;
    description: string;
    price: number;
    stock_quantity: number;
    amount: number;
    id: number;
    category_id: number;
};


let customerToCreate: Customer = { email: '' };
let total_amount: number = 0;
let productsToSave: Product[] = [];

export async function createOrder(userid: string) {
    const carItemToOrder = CarItem.getDatabase(userid);

    carItemToOrder.forEach((car: any) => {
        if (car !== undefined) {
            if (car.clientName !== undefined) {
                customerToCreate.email = car.clientName;
            }
            if (car.total_amount !== undefined) {
                total_amount = car.total_amount;
            }
            if (car.hasOwnProperty('id')) {
                const existingProduct = productsToSave.find(product => product.id === car.id);
                if (!existingProduct) {
                    productsToSave.push(car);
                }
            }
        }
    });

    const dataCustomer = await Customer.findByEmail(customerToCreate.email)
    customerToCreate.id = dataCustomer.data[0].id
    const customer_id = customerToCreate.id
    
    const newOrder = await supabase.from('Order').insert({ customer_id, total_amount }).select()
    const order_id = newOrder.data[0].id

    for (const product of productsToSave) {
        const product_id = product.id
        const product_amount = product.amount
        const orderProduct = await supabase.from('Order_Product').insert({ product_id, customer_id, product_amount, order_id }).select()
        console.log(orderProduct)
    }
    
}

