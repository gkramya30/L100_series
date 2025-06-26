# 🧠 Singleton Pattern – Logger Example

This example demonstrates the **Singleton Design Pattern** using a logger system in TypeScript.  
The Singleton pattern ensures that **only one instance** of a class exists across the application, providing a **single point of access**.

### 📌 Real-World Use Cases

- Logging systems  
- Configuration managers  
- Database connection pools  
- Caching modules  

---

## 📁 Files

Singleton_Pattern/
├── logger-singleton.ts # Logger with Singleton Pattern
├── logger-without-singleton.ts # Logger without using Singleton
└── README.md # Explanation and usage

---

## ▶️ How to Run

> Ensure you have **TypeScript** and **Node.js** installed.

### 1. Compile TypeScript files:

```bash
npx tsc logger-singleton.ts
npx tsc logger-without-singleton.ts

**### 2. Run the generated JavaScript files**

node logger-singleton.js
node logger-without-singleton.js

## ✅ Advantage of Singleton Pattern in This Example

| Feature            | With Singleton (`logger-singleton.ts`) | Without Singleton (`logger-without-singleton.ts`) |
|--------------------|----------------------------------------|---------------------------------------------------|
| Instance Control   | One shared instance                    | Multiple independent instances                    |
| Global Access      | ✅ Yes                                 | ❌ No                                              |
| Memory Usage       | Efficient                              | Can become high with many instances               |
| Consistency        | Same logger behavior everywhere        | Different loggers may behave differently          |
| State Management   | Centralized                            | Scattered                                          

### 🔍 In This Example

- **With Singleton**  
  `logger1` and `logger2` share the same instance.  
  Logs are consistent and centralized.

- **Without Singleton**  
  `loggerA` and `loggerB` are separate instances.  
  Each behaves independently, which can cause inconsistent behavior and extra memory usage.

