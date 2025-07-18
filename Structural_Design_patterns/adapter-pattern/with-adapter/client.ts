import { IPaymentProcessor } from "./IPaymentProcessor";
import { PayPal } from "./PayPal";
import { Stripe } from "./Stripe";
import { StripeAdapter } from "./StripeAdapter";

function processPayment(paymentProcessor: IPaymentProcessor, amount: number) {
    paymentProcessor.pay(amount);
}

const paypal = new PayPal();
const stripe = new Stripe();
const stripeAdapter = new StripeAdapter(stripe);

console.log("=== PayPal Transaction ===");
processPayment(paypal, 1500);

console.log("\n=== Stripe Transaction using Adapter ===");
processPayment(stripeAdapter, 2200);
