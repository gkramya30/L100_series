"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StripeAdapter = void 0;
// Adapter to match Stripe with IPaymentProcessor
class StripeAdapter {
    constructor(stripe) {
        this.stripe = stripe;
    }
    pay(amount) {
        this.stripe.makePayment(amount); // adapts the method
    }
}
exports.StripeAdapter = StripeAdapter;
