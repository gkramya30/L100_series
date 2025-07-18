import { IPaymentProcessor } from "./IPaymentProcessor";

export class PayPal implements IPaymentProcessor {
    pay(amount: number): void {
        console.log(`Paid ₹${amount} using PayPal.`);
    }
}