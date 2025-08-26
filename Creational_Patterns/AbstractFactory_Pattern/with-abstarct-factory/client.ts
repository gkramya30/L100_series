import { PaymentGatewayFactory } from "./interfaces/PaymentGatewayFactory";
import { PayPalFactory } from "./paypal/PayPalFactory";
import { StripeFactory } from "./stripe/StripeFactory";

function processTransaction(factory: PaymentGatewayFactory) {
  console.log("====== Using", factory.getGatewayInfo(), "======");

  const paymentProcessor = factory.createPaymentProcessor();
  const refundProcessor = factory.createRefundProcessor();

  // Make multiple payments
  const txn1 = paymentProcessor.processPayment(250, "USD", { orderId: "ORD-1001", user: "Alice" });
  const txn2 = paymentProcessor.processPayment(500, "EUR", { orderId: "ORD-1002", user: "Bob" });

  // Refund a partial amount
  refundProcessor.processRefund(txn1, 100, "Customer request");
  
  // Refund full transaction
  refundProcessor.processRefund(txn2);
}

// Choose gateway dynamically
const gateway = "paypal"; // change to "paypal"

let factory: PaymentGatewayFactory;

if (gateway === "paypal") {
  factory = new PayPalFactory("PAYPAL_API_KEY", "sandbox");
} else {
  factory = new StripeFactory("STRIPE_API_KEY", "test");
}

processTransaction(factory);
