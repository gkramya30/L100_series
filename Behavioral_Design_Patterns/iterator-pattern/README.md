#  Iterator Pattern in TypeScript

This repository demonstrates the **Iterator Design Pattern** in TypeScript using a simple collection traversal example. It illustrates how to access elements sequentially without exposing the underlying data structure.

---

## What is the Iterator Pattern?

The **Iterator Pattern** is a **Behavioral Design Pattern** that provides a way to access elements of an aggregate object (*e.g.*, a list or array) sequentially **without exposing its internal representation** :contentReference[oaicite:0]{index=0}.

---

## How is It Useful in Coding?

Adopting the Iterator pattern offers several benefits:

-  **Decouples traversal logic from collection structure**, making data access consistent across different collection types :contentReference[oaicite:1]{index=1}.  
-  Supports **multiple traversal strategies** (e.g., forward, backward, or custom orders) without altering the collection interface :contentReference[oaicite:2]{index=2}.  
-  Enhances **code readability and reuse**, providing a clean abstraction for collection iteration :contentReference[oaicite:3]{index=3}.

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
node dist/with-iterator.js
node dist/without-iterator.js
```
### Comparison: With vs Without Iterator

#### Using Iterator Pattern

Traversal logic is encapsulated in iterator objects, separate from data structures.

Collections expose a consistent interface for iteration, regardless of internal representation.

Clear separation of concerns leads to maintainable and extensible code.

Supports variation in traversal without modifying the collection classes.

#### Without Iterator Pattern

Clients must manage traversal logic themselves, often leading to direct access to collection internals.

Adding new traversal methods requires modifying client logic or collection interfaces.

Tight coupling between client and data structure reduces flexibility and maintainability.
