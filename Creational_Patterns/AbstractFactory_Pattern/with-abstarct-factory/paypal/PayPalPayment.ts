import { PaymentProcessor } from "../interfaces/PaymentProcessor";

export class PayPalPayment implements PaymentProcessor {
  processPayment(amount: number, currency: string, metadata?: Record<string, any>): string {
    const transactionId = "PP-" + Math.floor(Math.random() * 10000);
    console.log(`PayPal: Processing payment of ${currency}${amount}`);
    if (metadata) {
      console.log("PayPal: Metadata =>", metadata);
    }
    console.log(`PayPal: Transaction ID => ${transactionId}`);
    return transactionId;
  }
}
