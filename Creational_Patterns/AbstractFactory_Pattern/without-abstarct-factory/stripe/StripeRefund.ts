export class StripeRefund {
  processRefund(transactionId: string, amount?: number, reason?: string): void {
    console.log(`Stripe: Refunding Transaction ${transactionId}`);
    if (amount) console.log(`Partial Refund: $${amount}`);
    if (reason) console.log(`Reason: ${reason}`);
    console.log("Refund successful (Stripe).");
  }
}
