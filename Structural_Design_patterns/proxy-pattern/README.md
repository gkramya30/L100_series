# 🛡️ Proxy Pattern in TypeScript

This repository demonstrates the **Proxy Design Pattern** in TypeScript . It shows how a proxy object can control access to another object.

---

## What is the Proxy Pattern?

The **Proxy Pattern** is a **Structural Design Pattern** that provides a **surrogate or placeholder** object to control access to another object.  

It allows you to add extra functionality (such as logging, caching, lazy initialization, or access control) without changing the real object’s code.

---

## How is It Useful in Coding?

Using the Proxy pattern provides several benefits:

- ✅ Controls **access** to sensitive or resource-heavy objects  
- ✅ Supports **lazy initialization** (load objects only when needed)  
- ✅ Enables **caching** or **logging** without modifying core logic  
- ✅ Helps enforce **security and permissions**  

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
node with-proxy.js
node without-proxy.js
```

## Comparison: With vs Without Proxy

### ✅ Using Proxy

- Client interacts with the proxy, which manages the real object  
- Heavy objects are created only when needed (lazy loading)  
- Adds extra functionality like caching, logging, or access control  

---

### ❌ Without Proxy

- Client directly instantiates and uses heavy objects  
- No control over when/how expensive operations are executed  
- Harder to enforce security, caching, or logging in a consistent way  

---
