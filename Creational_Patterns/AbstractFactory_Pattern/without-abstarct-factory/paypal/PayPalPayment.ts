export class PayPalPayment {
  processPayment(amount: number, currency: string, metadata?: Record<string, any>): string {
    const txnId = "PP-" + Math.floor(Math.random() * 10000);
    console.log(`PayPal: Processing ${currency}${amount}`);
    if (metadata) {
      console.log("PayPal Metadata:", metadata);
    }
    console.log(`PayPal Transaction ID: ${txnId}`);
    return txnId;
  }
}
