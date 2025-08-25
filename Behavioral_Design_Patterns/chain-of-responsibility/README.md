# 🔗 Chain of Responsibility Pattern in TypeScript

This repository demonstrates the **Chain of Responsibility Design Pattern** in TypeScript using a simple request handling example. It shows the difference between using the pattern and handling requests manually with conditional statements.

---

## What is the Chain of Responsibility Pattern?

The **Chain of Responsibility Pattern** is a **Behavioral Design Pattern** that lets you pass a request along a chain of handlers.  
Each handler decides either to process the request or pass it to the next handler in the chain.

---

## How is It Useful in Coding?

Using the Chain of Responsibility pattern provides several benefits:

- ✅ **Decouples** request senders and receivers.  
- ✅ **Flexible** – you can easily reorder or extend the chain.  
- ✅ **Scalable** – adding new handlers does not affect client code.  
- ✅ **Clean code** – avoids large blocks of `if-else` or `switch` statements.  

---

## Project File Structure (TypeScript)

```vbnet
chain-of-responsibility/
├── src/
│   ├── with-chain.ts          # Implementation using Chain of Responsibility
│   └── without-chain.ts       # Implementation without Chain of Responsibility
├── tsconfig.json              # TypeScript config file
├── package.json               # Node project config
└── README.md                  # Project documentation
```
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
### Comparison: With vs Without Chain of Responsibility

✅ Using Chain of Responsibility

Requests are passed through a chain of handlers.

Each handler decides whether to process or forward the request.

Easy to add, remove, or modify handlers without touching client code.

Promotes clean and maintainable code.

❌ Without Chain of Responsibility

The client must handle all request conditions manually.

Logic becomes a long series of if-else or switch statements.

Difficult to maintain and extend when new cases are added.

Leads to tight coupling between request senders and receivers.

