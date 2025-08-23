# 🏢 Abstract Factory Pattern in TypeScript

This repository demonstrates the **Abstract Factory Design Pattern** in TypeScript using a payment gateway example. It shows the difference between using an abstract factory to create families of related objects versus creating them manually.

---

## What is the Abstract Factory Pattern?

The **Abstract Factory Pattern** is a **Creational Design Pattern** that provides an interface for creating **families of related or dependent objects** without specifying their concrete classes.  

It is often used when a system needs to be independent of how its objects are created, composed, and represented.

---

## How is It Useful in Coding?

Using the Abstract Factory pattern provides several benefits:

- ✅ Encapsulates **object creation logic for related products**  
- ✅ Ensures **consistency across families of objects**  
- ✅ Makes switching between product families (e.g., PayPal vs Stripe) **easier**  
- ✅ Promotes **loose coupling** and adheres to the **Dependency Inversion Principle**  

---

## Project File Structure (TypeScript)

```plaintext
abstract-factory-pattern/
├── src/
│   ├── with-abstract-factory.ts     # Payment gateways via Abstract Factory
│   └── without-abstract-factory.ts  # Payment gateways without Abstract Factory
├── tsconfig.json                    # TypeScript config file
├── package.json                     # Node project config
└── README.md                        # Project documentation
```
## How to Run

 Step 1: Install dependencies (if using a package.json)
```typescript
npm install
```
 Step 2: Compile TypeScript files
```typescript
npx tsc
```
 Step 3: Run the compiled JavaScript files

```typescript
node with-abstract-pattern.js
node without-abstract-pattern.js
```
### Comparison: With vs Without Abstract Factory

✅ Using Abstract Factory (with-abstract-factory.ts)

Centralizes creation of related objects (payment + refund)

Makes switching gateways simple (just change factory)

Ensures consistency across products in the same family

```typescript
function processTransaction(factory: PaymentGatewayFactory) {
  const paymentProcessor = factory.createPaymentProcessor();
  const refundProcessor = factory.createRefundProcessor();

  paymentProcessor.processPayment(100);
  refundProcessor.processRefund("TXN123");
}

const gateway = "paypal"; // Change to 'stripe'

let factory: PaymentGatewayFactory;

if (gateway === "paypal") {
  factory = new PayPalFactory();
} else {
  factory = new StripeFactory();
}

processTransaction(factory);
```

❌ Without Abstract Factory (without-abstract-factory.ts)

Client code is tightly coupled to concrete classes

Harder to maintain when adding new gateways

Requires manual changes throughout the codebase
```typescript

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
```
