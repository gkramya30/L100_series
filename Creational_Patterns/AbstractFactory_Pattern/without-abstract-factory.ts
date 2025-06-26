// without-abstract-factory.ts

class PayPalPayment {
  processPayment(amount: number): void {
    console.log(`PayPal: Processing payment of $${amount}`);
  }
}

class PayPalRefund {
  processRefund(transactionId: string): void {
    console.log(`PayPal: Refunding transaction ${transactionId}`);
  }
}

class StripePayment {
  processPayment(amount: number): void {
    console.log(`Stripe: Processing payment of $${amount}`);
  }
}

class StripeRefund {
  processRefund(transactionId: string): void {
    console.log(`Stripe: Refunding transaction ${transactionId}`);
  }
}

// Client manually selects gateway
let gateway: string = "stripe"; // Change to 'paypal'

let payment;
let refund;

if (gateway === "paypal") {
  payment = new PayPalPayment();
  refund = new PayPalRefund();
} else {
  payment = new StripePayment();
  refund = new StripeRefund();
}

payment.processPayment(100);
refund.processRefund("TXN123");
