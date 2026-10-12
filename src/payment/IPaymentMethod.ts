export interface IPaymentDetails {
    cardNumber?: string;
    cvv?: string;
    pixKey?: string;
}

export interface IPaymentInput {
    amount: number;
    details: IPaymentDetails;
}

export interface IPaymentResult {
    transactionId: string;
    status: 'aprovada' | 'recusada';
}

export interface IPaymentMethod {
    readonly key: string;
    process(input: IPaymentInput): Promise<IPaymentResult>;
}