import { IPaymentProcessor } from "./IPaymentProcessor";
import { Stripe } from "./Stripe";

// Adapter to match Stripe with IPaymentProcessor
export class StripeAdapter implements IPaymentProcessor {
    private stripe: Stripe;

    constructor(stripe: Stripe) {
        this.stripe = stripe;
    }

    pay(amount: number): void {
        this.stripe.makePayment(amount); // adapts the method
    }
}