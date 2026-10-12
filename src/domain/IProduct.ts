export interface IProduct {
    id: number;
    name: string;
    price: number;
    type: string;

    calculateFreight(quantity: number): number;
}