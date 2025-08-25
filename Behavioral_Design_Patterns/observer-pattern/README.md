# ​ Observer Pattern in TypeScript

This repository demonstrates the **Observer Design Pattern** in TypeScript using a simple example of a subject and multiple observers. It shows the difference between using the pattern and handling event changes manually.

---

## What is the Observer Pattern?

The **Observer Pattern** is a **Behavioral Design Pattern** that defines a one-to-many dependency between objects so that when one object (the subject) changes state, all its dependents (observers) are notified and updated automatically.

---

## How is It Useful in Coding?

Using the Observer pattern provides several benefits:

- ✅ **Decouples subjects and observers**—the subject only knows about the abstract observer interface, not about concrete implementations.  
- ✅ **Dynamic subscription**—observers can be added or removed at runtime.  
- ✅ **Scalable notification mechanism**—multiple observers can respond to updates without complex wiring.  
- ✅ **Cleaner, reactive code**—state changes automatically propagate to interested parties.

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
node client.js
node client.js
```
### Comparison: With vs Without Observer

## Using Observer

Observers subscribe to the subject and get notified when it updates

Adding or removing observers requires no changes in subject or other observers

Promotes a reactive design with low coupling and high flexibility

## Without Observer

Manual polling or callback chains are required to detect changes

Tight coupling: subjects must know about all consumers

Harder to scale and extend since adding behavior may require modifying multiple components
