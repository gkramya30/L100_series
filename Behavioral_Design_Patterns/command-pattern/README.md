#  Command Pattern in TypeScript

This repository demonstrates the **Command Design Pattern** in TypeScript using a self-contained request example. It shows how commands can encapsulate actions as objects, enabling flexible, decoupled, and extensible behavior.

---

## What is the Command Pattern?

The **Command Pattern** is a **Behavioral Design Pattern** that encapsulates a request or action as a standalone object. This allows you to parameterize clients with different requests, queue operations, and support undo/redo functionality.  
It decouples the object invoking the operation (Invoker) from the object performing it (Receiver), using a Command interface as an intermediary. :contentReference[oaicite:0]{index=0}

---

## How is It Useful in Coding?

Using the Command pattern offers several key benefits:

-  **Decouples Invoker and Receiver**, allowing flexible assignment of actions. :contentReference[oaicite:1]{index=1}  
-  **Enables queuing, logging, and scheduling** of requests. :contentReference[oaicite:2]{index=2}  
-  **Supports undoable operations**, like reversing user actions. :contentReference[oaicite:3]{index=3}  
-  **Makes actions first-class objects**, improving design flexibility and testability.

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
node dist/with-command.js
node dist/without-command.js
```
### Comparison: With vs Without Command Pattern

#### Using Command Pattern

Actions are encapsulated as reusable command objects.

The Invoker can execute commands without knowing their details.

Supports advanced behavior like queuing, undo, and logging.

Highly flexible, enabling dynamic and extensible command structures.

#### Without Command Pattern

Client must directly call methods on receivers, leading to tighter coupling.

Harder to schedule or reorder actions dynamically.

Undo and logging logic must be manually handled or replicated.

Adding new behaviors often requires modifying the client or receiver, reducing maintainability.
