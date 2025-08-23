#  Template Method Pattern in TypeScript

This repository demonstrates the **Template Method Design Pattern** in TypeScript using a general workflow example. It highlights how the pattern lets you define the skeleton of an algorithm in a base class while allowing subclasses to override specific steps.

---

## What is the Template Method Pattern?

The **Template Method Pattern** is a **Behavioral Design Pattern** that defines the structure or outline of an operation in a method, called the template method. Subclasses can override certain steps without altering the algorithm’s overall structure.

---

## How is It Useful in Coding?

Using the Template Method pattern delivers several benefits:

-  **Promotes code reuse**—common algorithm structure is centralized in a base class.  
-  **Encourages the Open/Closed Principle**—you can extend behavior without modifying the base class.  
-  **Maintains algorithm consistency** while providing flexibility for customization.  
-  **Simplifies maintenance** and enhances clarity by defining common workflow steps in one place.

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
node dist/with-template.js
node dist/without-template.js
```
### Comparison: With vs Without Template Method

#### Using Template Method

Defines a fixed algorithm structure in a base class.

Subclasses implement or override specific steps as needed.

Encourages consistency across different implementations while enabling variation in details.

Easier to maintain and extend—adding a new variant doesn't require changing the algorithm’s structure.

#### Without Template Method

Each implementation repeats the algorithm's overall structure independently.

Duplicated logic across concrete classes increases risk of inconsistency.

Harder to maintain—modifying the workflow requires changes in multiple places.

Less flexible—adding a new variation often involves significant code duplication.
