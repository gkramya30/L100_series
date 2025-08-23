# 🎨 Decorator Pattern in TypeScript

This repository demonstrates the **Decorator Design Pattern** in TypeScript using a coffee shop example. It shows how to dynamically add responsibilities or features to objects without modifying their code.

---

## What is the Decorator Pattern?

The **Decorator Pattern** is a **Structural Design Pattern** that allows behavior to be added to individual objects, dynamically, without affecting the behavior of other objects of the same class.  

It is achieved by placing objects inside wrapper objects (decorators) that provide additional functionality.

---

## How is It Useful in Coding?

Using the Decorator pattern provides several benefits:

- ✅ Adds new behavior to objects **at runtime**  
- ✅ Promotes **flexibility** by avoiding rigid inheritance hierarchies  
- ✅ Supports **open/closed principle** (open for extension, closed for modification)  
- ✅ Allows combining multiple behaviors in a **layered way**  

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
node with-decorator.js
node without-decorator.js
```

## Comparison: With vs Without Decorator

### ✅ Using Decorator

- New features can be added dynamically to existing objects  
- Client code remains simple while behavior extends flexibly  
- Multiple decorators can be stacked together to combine features  

---

### ❌ Without Decorator

- Requires subclassing for each variation (e.g., CoffeeWithMilk, CoffeeWithSugar, CoffeeWithMilkAndSugar)  
- Leads to class explosion when many combinations are needed  
- Harder to maintain and extend in the long run  

---
