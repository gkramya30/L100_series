"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const PayPal_1 = require("./PayPal");
const Stripe_1 = require("./Stripe");
const StripeAdapter_1 = require("./StripeAdapter");
function processPayment(paymentProcessor, amount) {
    paymentProcessor.pay(amount);
}
const paypal = new PayPal_1.PayPal();
const stripe = new Stripe_1.Stripe();
const stripeAdapter = new StripeAdapter_1.StripeAdapter(stripe);
console.log("=== PayPal Transaction ===");
processPayment(paypal, 1500);
console.log("\n=== Stripe Transaction using Adapter ===");
processPayment(stripeAdapter, 2200);
