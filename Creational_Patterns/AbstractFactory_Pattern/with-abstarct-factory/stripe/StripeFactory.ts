import { PaymentGatewayFactory } from "../interfaces/PaymentGatewayFactory";
import { PaymentProcessor } from "../interfaces/PaymentProcessor";
import { RefundProcessor } from "../interfaces/RefundProcessor";
import { StripePayment } from "./StripePayment";
import { StripeRefund } from "./StripeRefund";

export class StripeFactory implements PaymentGatewayFactory {
  constructor(private apiKey: string, private environment: "test" | "live") {}

  createPaymentProcessor(): PaymentProcessor {
    console.log(`Stripe Factory initialized in ${this.environment} mode`);
    return new StripePayment();
  }

  createRefundProcessor(): RefundProcessor {
    return new StripeRefund();
  }

  getGatewayInfo(): string {
    return `Stripe Gateway [Env=${this.environment}]`;
  }
}
