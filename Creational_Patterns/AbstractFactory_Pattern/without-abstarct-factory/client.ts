import { PayPalPayment } from "./paypal/PayPalPayment";
import { PayPalRefund } from "./paypal/PayPalRefund";
import { StripePayment } from "./stripe/StripePayment";
import { StripeRefund } from "./stripe/StripeRefund";

// Select gateway manually
let gateway: string = "paypal"; // change to "stripe"

let payment: any;
let refund: any;

if (gateway === "paypal") {
  payment = new PayPalPayment();
  refund = new PayPalRefund();
} else if (gateway === "stripe") {
  payment = new StripePayment();
  refund = new StripeRefund();
} else {
  throw new Error("Unsupported gateway!");
}

// Multiple payments
const txn1 = payment.processPayment(300, "USD", { orderId: "ORD-101", user: "Alice" });
const txn2 = payment.processPayment(150, "EUR", { orderId: "ORD-102", user: "Bob" });

// Refunds
refund.processRefund(txn1, 100, "Partial refund for damaged item");
refund.processRefund(txn2); // full refund
