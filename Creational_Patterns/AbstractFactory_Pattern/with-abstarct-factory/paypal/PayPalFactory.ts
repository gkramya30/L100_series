import { PaymentGatewayFactory } from "../interfaces/PaymentGatewayFactory";
import { PaymentProcessor } from "../interfaces/PaymentProcessor";
import { RefundProcessor } from "../interfaces/RefundProcessor";
import { PayPalPayment } from "./PayPalPayment";
import { PayPalRefund } from "./PayPalRefund";

export class PayPalFactory implements PaymentGatewayFactory {
  constructor(private apiKey: string, private environment: "sandbox" | "production") {}

  createPaymentProcessor(): PaymentProcessor {
    console.log(`PayPal Factory initialized with environment: ${this.environment}`);
    return new PayPalPayment();
  }

  createRefundProcessor(): RefundProcessor {
    return new PayPalRefund();
  }

  getGatewayInfo(): string {
    return `PayPal Gateway [Env=${this.environment}]`;
  }
}
