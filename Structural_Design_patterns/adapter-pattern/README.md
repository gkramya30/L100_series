# 🔌 Adapter Pattern in TypeScript

This repository demonstrates the **Adapter Design Pattern** in TypeScript using a payment gateway example. It shows the difference between adapting an incompatible interface to match the expected one versus directly coding to a specific implementation.

---

## What is the Adapter Pattern?

The **Adapter Pattern** is a **Structural Design Pattern** that allows incompatible interfaces to work together.  
It acts as a **bridge** between two classes by converting the interface of a class into another interface that the client expects.

---

## How is It Useful in Coding?

Using the Adapter pattern provides several benefits:

- ✅ Allows **integration of third-party code** without modifying it  
- ✅ Promotes **code reusability** by bridging incompatible systems  
- ✅ Makes systems **more flexible and maintainable**  
- ✅ Encourages **loose coupling** between client and implementation  

---
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
node with-adapter.js
node without-adapter.js
```
### Comparison: With vs Without Adapter

✅ Using Adapter (with-adapter.ts)

Provides a wrapper to make incompatible APIs compatible

Client code interacts with a consistent interface

Third-party or legacy code doesn’t need modification

❌ Without Adapter (without-adapter.ts)

Client must deal directly with third-party or incompatible APIs

Requires conversions/scattered logic in multiple places

Harder to maintain if API changes

