export interface RefundProcessor {
  processRefund(transactionId: string, amount?: number, reason?: string): void;
}
