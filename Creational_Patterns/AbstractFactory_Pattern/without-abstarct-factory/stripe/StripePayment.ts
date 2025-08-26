export class StripePayment {
  processPayment(amount: number, currency: string, metadata?: Record<string, any>): string {
    const txnId = "ST-" + Math.floor(Math.random() * 10000);
    console.log(`Stripe: Charging ${currency}${amount}`);
    if (metadata) {
      console.log("Stripe Metadata:", metadata);
    }
    console.log(`Stripe Transaction ID: ${txnId}`);
    return txnId;
  }
}
