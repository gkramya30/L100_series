# ​ Mediator Pattern in TypeScript

This repository demonstrates the **Mediator Design Pattern** in TypeScript using a simplified communication example. It highlights how a mediator can centralize interactions between components and reduce coupling.

---

## What is the Mediator Pattern?

The **Mediator Pattern** is a **Behavioral Design Pattern** that defines an object (the mediator) to encapsulate how a set of objects interact.  
Instead of objects referring to each other directly, they communicate through the mediator—promoting loose coupling and better maintainability.

---

## How is It Useful in Coding?

Using the Mediator pattern provides several benefits:

- ✅ **Reduces coupling** between components—objects don’t need to know the details of other objects.  
- ✅ **Simplifies object communication** by centralizing interactions in one place.  
- ✅ **Easier to maintain and extend**—components can be added or removed without changing others.  
- ✅ **Promotes clarity** in complex workflows or communication logic.

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
node dist/with-mediator.js
node dist/without-mediator.js
```
### Comparison: With vs Without Mediator

#### Using Mediator

Components interact only with the mediator, not directly with each other.

Communication rules and logic are centralized in the mediator.

Adding or modifying components doesn't require changes in other components.

Enhances modularity and scalability.

#### Without Mediator

Components need direct references to each other, leading to tangled dependencies.

As the system grows, communication becomes complex and brittle.

Changing one component often requires updating many others—poor maintainability.
