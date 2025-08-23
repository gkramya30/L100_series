# 🏠 Facade Pattern in TypeScript

This repository demonstrates the **Facade Design Pattern** in TypeScript using a home theater system example. It shows how to provide a simple interface to a complex subsystem.

---

## What is the Facade Pattern?

The **Facade Pattern** is a **Structural Design Pattern** that provides a **unified, simplified interface** to a set of interfaces in a subsystem.  

It helps reduce complexity by hiding the details of the underlying system and exposing only what is necessary to the client.

---

## How is It Useful in Coding?

Using the Facade pattern provides several benefits:

- ✅ Simplifies usage of **complex subsystems**  
- ✅ Reduces **dependencies** between clients and subsystems  
- ✅ Improves **readability and usability** of code  
- ✅ Makes systems easier to maintain and extend  

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
node with-facade.js
node without-facade.js
```

## Comparison: With vs Without Facade

### ✅ Using Facade

- Client interacts with a single, simple interface  
- Internal complexity of subsystems is hidden  
- Reduces coupling between client code and multiple subsystem classes  

---

### ❌ Without Facade

- Client must interact with many subsystem classes directly  
- Increases complexity and dependency in client code  
- Harder to maintain when subsystem implementations change  

---
