import { RefundProcessor } from "../interfaces/RefundProcessor";

export class StripeRefund implements RefundProcessor {
  processRefund(transactionId: string, amount?: number, reason?: string): void {
    console.log(`Stripe: Refunding Transaction => ${transactionId}`);
    if (amount) {
      console.log(`Partial Refund: $${amount}`);
    }
    if (reason) {
      console.log(`Reason: ${reason}`);
    }
    console.log("Refund successfully issued with Stripe.");
  }
}
