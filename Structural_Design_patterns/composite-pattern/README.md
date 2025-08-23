# 🌿 Composite Pattern in TypeScript

This repository demonstrates the **Composite Design Pattern** in TypeScript using a file system (folders and files) example. It shows the difference between treating individual objects and compositions of objects uniformly.

---

## What is the Composite Pattern?

The **Composite Pattern** is a **Structural Design Pattern** that allows you to compose objects into tree structures to represent part-whole hierarchies.  

It lets clients treat individual objects (leaves) and groups of objects (composites) **uniformly**.

---

## How is It Useful in Coding?

Using the Composite pattern provides several benefits:

- ✅ Simplifies client code by treating **individual and composite objects the same**  
- ✅ Makes it easy to work with **tree-like structures** (e.g., menus, file systems, UI components)  
- ✅ Promotes **recursion and reuse** in hierarchical data  
- ✅ Improves flexibility by allowing new components to be added without changing existing code  

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
node with-composite.js
node without-composite.js
```
## Comparison: With vs Without Composite

### ✅ Using Composite

- Files and folders can be treated uniformly through a common interface  
- Supports recursive structures (folders can contain files or other folders)  
- Client code doesn’t need to distinguish between single objects and groups  

---

### ❌ Without Composite

- Client must handle files and folders separately  
- Different code paths for individual items vs groups  
- Harder to extend or maintain when hierarchy gets complex  

---
