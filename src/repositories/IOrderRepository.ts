export interface ICreateOrder {
    customer: string;
    items: string;
    total: number;
    status: string;
}

export interface IOrder extends ICreateOrder {
    id: number;
}

export interface IOrderRepository {
    create(data: ICreateOrder): Promise<IOrder>;
    findProductById(productId: number): Promise<{ 
        id: number;
        name: string;
        price: number;
        type: string
    } | null>;
}