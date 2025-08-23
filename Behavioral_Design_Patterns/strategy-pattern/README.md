#  Strategy Pattern in TypeScript

This repository demonstrates the **Strategy Design Pattern** in TypeScript using a simple example of interchangeable algorithms. It shows how the pattern allows selection of behavior at runtime without modifying client code.

---

## What is the Strategy Pattern?

The **Strategy Pattern** is a **Behavioral Design Pattern** that defines a family of algorithms, encapsulates each one, and makes them interchangeable. The client can choose the appropriate algorithm at runtime based on needs.

---

## How is It Useful in Coding?

Using the Strategy pattern provides several benefits:

- ✅ **Separates algorithm from context**—encourages clean, independent implementations.  
- ✅ Enables **runtime selection** of behavior without code changes.  
- ✅ Promotes adherence to the **Open/Closed Principle**—new strategies can be added without modifying existing code.  
- ✅ Simplifies testing and maintenance by isolating algorithms.

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
node dist/with-strategy.js
node dist/without-strategy.js
```
### Comparison: With vs Without Strategy

#### Using Strategy

Algorithms are encapsulated in interchangeable strategy classes.

Client can switch between behaviors at runtime.

Adding new behaviors is easy—just create a new strategy implementation.

Context and algorithms are loosely coupled, resulting in clean and flexible code.

#### Without Strategy

Behavior is baked into the context using conditionals (e.g., if-else or switch statements).

Changing or adding behaviors requires modifying context logic.

Leads to code that is harder to test, maintain, and extend.

