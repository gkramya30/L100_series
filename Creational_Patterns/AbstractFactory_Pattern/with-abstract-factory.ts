// with-abstract-factory.ts

// Interfaces
interface PaymentProcessor {
  processPayment(amount: number): void;
}

interface RefundProcessor {
  processRefund(transactionId: string): void;
}

interface PaymentGatewayFactory {
  createPaymentProcessor(): PaymentProcessor;
  createRefundProcessor(): RefundProcessor;
}

// PayPal Implementation
class PayPalPayment implements PaymentProcessor {
  processPayment(amount: number): void {
    console.log(`PayPal: Processing payment of $${amount}`);
  }
}

class PayPalRefund implements RefundProcessor {
  processRefund(transactionId: string): void {
    console.log(`PayPal: Refunding transaction ${transactionId}`);
  }
}

class PayPalFactory implements PaymentGatewayFactory {
  createPaymentProcessor(): PaymentProcessor {
    return new PayPalPayment();
  }
  createRefundProcessor(): RefundProcessor {
    return new PayPalRefund();
  }
}

// Stripe Implementation
class StripePayment implements PaymentProcessor {
  processPayment(amount: number): void {
    console.log(`Stripe: Processing payment of $${amount}`);
  }
}

class StripeRefund implements RefundProcessor {
  processRefund(transactionId: string): void {
    console.log(`Stripe: Refunding transaction ${transactionId}`);
  }
}

class StripeFactory implements PaymentGatewayFactory {
  createPaymentProcessor(): PaymentProcessor {
    return new StripePayment();
  }
  createRefundProcessor(): RefundProcessor {
    return new StripeRefund();
  }
}

// Client code
function processTransaction(factory: PaymentGatewayFactory) {
  const paymentProcessor = factory.createPaymentProcessor();
  const refundProcessor = factory.createRefundProcessor();

  paymentProcessor.processPayment(100);
  refundProcessor.processRefund("TXN123");
}

// Choose gateway
const gateway = "paypal"; // Change to 'stripe'

let factory: PaymentGatewayFactory;

if (gateway === "paypal") {
  factory = new PayPalFactory();
} else {
  factory = new StripeFactory();
}

processTransaction(factory);
