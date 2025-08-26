import { PaymentProcessor } from "./PaymentProcessor";
import { RefundProcessor } from "./RefundProcessor";

export interface PaymentGatewayFactory {
  createPaymentProcessor(): PaymentProcessor;
  createRefundProcessor(): RefundProcessor;
  getGatewayInfo(): string;
}
