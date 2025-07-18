"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Stripe = void 0;
class Stripe {
    makePayment(value) {
        console.log(`Paid ₹${value} using Stripe.`);
    }
}
exports.Stripe = Stripe;
