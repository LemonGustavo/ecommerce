import { IProduct } from "./IProduct";

export class PhysicalProduct implements IProduct {
    constructor(
        public id: number,
        public name: string,
        public price: number,
        public type = 'physical', 
    ) {}

    calculateFreight(quantity: number): number {
        return 10;
    }
}