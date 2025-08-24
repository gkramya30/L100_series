# ​ Mediator Pattern in TypeScript

This repository demonstrates the **Mediator Design Pattern** in TypeScript using a component communication example. It shows how a mediator centralizes interactions between objects, promoting loose coupling and clearer communication flows.

---

## What is the Mediator Pattern?

The **Mediator Pattern** is a **Behavioral Design Pattern** that encapsulates how a set of objects interact by introducing a mediator object between them.  
Instead of communicating directly, objects send messages via the mediator—simplifying and centralizing their interactions.:contentReference[oaicite:0]{index=0}

---

## How is It Useful in Coding?

Using the Mediator pattern offers several key benefits:

- ✅ **Reduces coupling** between components—objects don’t need to know about each other, only the mediator.:contentReference[oaicite:1]{index=1}  
- ✅ **Centralizes communication logic**, making the system easier to understand and modify.:contentReference[oaicite:2]{index=2}  
- ✅ Promotes **modularity and maintainability**—components can be added or removed without changing others.:contentReference[oaicite:3]{index=3}  
- ✅ Ideal for systems with complex interactions (e.g., chat rooms, GUI management, air traffic control).:contentReference[oaicite:4]{index=4}

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
node dist/with-memento.js
node dist/without-memento.js
```
### Comparison: With vs Without Mediator

#### Using Mediator

Components communicate only via the mediator, not directly.

All interaction logic is centralized, making the flow easier to control.

Components remain independent and easier to extend or refactor.

#### Without Mediator

Components must know about each other directly, resulting in tight coupling.

Communication logic becomes scattered and hard to manage.

Introducing changes or new interactions requires touching many parts of the system.
