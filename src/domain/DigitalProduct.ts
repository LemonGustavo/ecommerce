import { IProduct } from "./IProduct";

export class DigitalProduct implements IProduct {
    constructor(
        public id: number,
        public name: string,
        public price: number,
        public type = 'digital', 
    ) {}

    calculateFreight(quantity: number): number {
        return 0;
    }
}