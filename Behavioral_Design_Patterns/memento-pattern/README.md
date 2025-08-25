#  Memento Pattern in TypeScript

This repository demonstrates the **Memento Design Pattern** in TypeScript using a practical example. It shows how to capture and restore an object’s state without violating encapsulation principles.

---

## What is the Memento Pattern?

The **Memento Pattern** is a **Behavioral Design Pattern** that allows you to externally save and restore an object's internal state without exposing its internal details. It involves three core components:

- **Originator**: The object whose state needs to be saved and restored.  
- **Memento**: A snapshot of the originator's state at a point in time.  
- **Caretaker**: Manages memento(s), preserving them and restoring the originator when needed.

---

## How is It Useful in Coding?

Using the Memento pattern provides several key benefits:

-  **Supports undo and rollback functionality**, enabling users to revert changes.  
-  **Encapsulates object state**, maintaining encapsulation and integrity.  
-  **Decouples state storage from object logic**, promoting clean design separation.  
-  **Supports state versioning and restoration**, useful in editors, games, and transaction systems.

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
### Comparison: With vs Without Memento Pattern

#### Using Memento Pattern

The Originator can save its state in a memento and restore from it later.

Care Taker keeps track of mementos and manages state restoration.

Behavior is cleanly separated from state storage, preserving encapsulation.

Adds powerful undo/rollback capabilities with minimal intrusion into business logic.

#### Without Memento Pattern

Objects must expose internal data or manually handle all state changes, violating encapsulation.

Undo/rollback logic gets tangled with the core class code, increasing complexity.

Harder to manage saved states and maintain clear separation—introducing fragile or bloated designs.
