export interface PaymentProcessor {
  processPayment(amount: number, currency: string, metadata?: Record<string, any>): string;
}
