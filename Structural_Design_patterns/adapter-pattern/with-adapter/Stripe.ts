// Stripe has a different interface
export class Stripe {
    makePayment(value: number): void {
        console.log(`Paid ₹${value} using Stripe.`);
    }
}