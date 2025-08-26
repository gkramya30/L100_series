import { PaymentProcessor } from "../interfaces/PaymentProcessor";

export class StripePayment implements PaymentProcessor {
  processPayment(amount: number, currency: string, metadata?: Record<string, any>): string {
    const transactionId = "ST-" + Math.floor(Math.random() * 10000);
    console.log(`Stripe: Charging ${currency}${amount}`);
    if (metadata) {
      console.log("Stripe: Metadata =>", metadata);
    }
    console.log(`Stripe: Transaction ID => ${transactionId}`);
    return transactionId;
  }
}
