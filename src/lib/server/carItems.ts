type carItem = {
    id?: number;
    clientName?: string
    userid: any;
    description: string
    name: string
    price: number
    category_id: number
    stock_quantity: number
    amount?: number
}


const database = new Map();

export function getCarItem(userid: string) {
    if (!database.has(userid)) {
        database.set(userid, new Map());

    }

    return Array.from(database.get(userid).values());
}

export function setProduct({ id, userid, description, name, price, category_id, stock_quantity, amount }: carItem) {
    if (!database.has(userid)) {
        database.set(userid, new Map());
    }

    const carItem = database.get(userid);

    carItem.set(id, {
        id,
        description, name, price, category_id, stock_quantity, amount
    });

    if (amount === 0) {
        carItem.delete(id);
    }

    // console.log(carItem)
    let total_amount: number = 0
    carItem.forEach((element: any) => {

        if (element.amount !== undefined) {
            total_amount += parseInt(element.amount)
        }
    });


    if (!carItem.has(total_amount)) {
        carItem.set('total_amount', { total_amount });
    } else {
        carItem.get('total_amount')!.total_amount = total_amount;
    }

    console.log(carItem)
    return {
        total_amount
    };
}

export function setClientName({ userid, clientName }: any) {
    let carItem = database.get(userid);

    if (!carItem) {
        carItem = new Map();
        database.set(userid, carItem);
    }

    if (!carItem.has(clientName)) {
        carItem.set('clientName', { clientName });
    } else {
        carItem.get('clientName')!.clientName = clientName;
    }
    console.log(carItem)
}

export function getClientName(userid:string) { 
    let carItem = database.get(userid);
    return { clientName: carItem.get('clientName').clientName}
}

export function deleteCarItem({ userid, id }: carItem) {
    const carItem = database.get(userid);
    carItem.delete();
}

export function getDatabase(userid: any) {
    const carItem = database.get(userid);
    return carItem
 }