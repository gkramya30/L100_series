#  Visitor Pattern in TypeScript

This repository demonstrates the **Visitor Design Pattern** in TypeScript using an example where operations over a structure (like elements in a collection or nodes in a hierarchy) are defined separately from the elements themselves.

---

## What is the Visitor Pattern?

The **Visitor Pattern** is a **Behavioral Design Pattern** that separates algorithms from the objects on which they operate by moving these operations into "visitor" classes.  
This allows you to add new operations without modifying the object structure. 

---

## How is It Useful in Coding?

Using the Visitor pattern provides several benefits:

-  **Adds new functionality** without changing the object structure.  
-  **Encapsulates operations** cleanly within visitor classes.  
-  Encourages **Open/Closed Principle**—you can introduce new operations easily.  
-  Useful when dealing with **composite or hierarchical structures**, where operations span multiple object types.

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

### Comparison: With vs Without Visitor Pattern

#### Using Visitor Pattern

Operations are encapsulated in visitor classes, not in the element classes.

Easy to add new operations by creating new visitors—no need to modify existing classes.

Maintains clean separation between data structures and operations.

Enhances extensibility and maintainability in systems with complex data hierarchies.

#### Without Visitor Pattern

Operations often clutter element classes, mixing logic with structure.

Adding new operations requires updating all element classes, risking code duplication and errors.

Structure and behavior are tightly coupled, reducing flexibility and scalability.
