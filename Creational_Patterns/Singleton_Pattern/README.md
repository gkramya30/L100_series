# 🧩 Singleton Pattern in TypeScript

This repository demonstrates the **Singleton Design Pattern** in TypeScript using a simple logging class. It shows the difference between using a singleton and creating multiple instances manually.

---

## What is the Singleton Pattern?

The **Singleton Pattern** ensures that a class has only **one instance** and provides a global point of access to that instance. 

It is part of the **Creational Design Patterns** and is useful when exactly one object is needed to coordinate actions across a system.

---

## How is It Useful in Coding?

Using the Singleton pattern provides several benefits:

- ✅ Ensures **controlled access** to the sole instance.
- ✅ Saves **memory** by preventing multiple instances.
- ✅ Facilitates **shared access** to resources like configurations, loggers, or database connections.
- ✅ Encourages **consistency** across the application by working with the same instance.

---

## Project File Structure (TypeScript)

```vbnet
singleton-pattern/
├── src/
│ ├── logger-singleton.ts # Logger using Singleton Pattern
│ └── logger-without-singleton.ts # Logger without Singleton
├── tsconfig.json # TypeScript config file
├── package.json # Node project config
└── README.md # Project documentation

```
## How to Run

' Step 1: Install dependencies (if using a package.json)
npm install

' Step 2: Compile TypeScript files
npx tsc

' Step 3: Run the compiled JavaScript files
node logger-singleton.js
node logger-without-singleton.js

## Comparison: With vs Without Singleton

### ✅ Using Singleton (`logger-singleton.ts`)

- The same instance is reused throughout the code  
- Logging is done through a shared object  
- Saves memory and promotes centralized control  

```typescript
const logger1 = SingletonLogger.getInstance();
const logger2 = SingletonLogger.getInstance();

console.log(logger1 === logger2);
```

### ❌ Without Singleton (`logger-without-singleton.ts`)

- Multiple instances are created even if not necessary  
- Increases memory usage and may cause an inconsistent state  

```typescript
const loggerA = new Logger("LoggerA");
const loggerB = new Logger("LoggerB");

console.log(loggerA === loggerB); // false




