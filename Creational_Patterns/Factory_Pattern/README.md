# 🏭 Factory Pattern in TypeScript

This repository demonstrates the **Factory Design Pattern** in TypeScript using a simple shape-drawing example. It shows the difference between using a factory method to create objects versus creating instances manually.

---

## What is the Factory Pattern?

The **Factory Pattern** is a **Creational Design Pattern** that provides an interface for creating objects in a superclass but allows methods or subclasses to decide which class to instantiate.

Instead of using the `new` keyword everywhere, the factory centralizes and manages the object creation logic.

---

## How is It Useful in Coding?

Using the Factory pattern provides several benefits:

- ✅ Centralizes and **encapsulates object creation** logic.  
- ✅ Reduces **tight coupling** between client code and concrete classes.  
- ✅ Makes code **more flexible and maintainable** when new types are added.  
- ✅ Encourages the **Open/Closed Principle** (open for extension, closed for modification).  

---

## Project File Structure (TypeScript)

```vbnet
factory-pattern/
├── src/
│   ├── with-factory     # Shapes created via Factory Pattern
│   └── without-factory.ts     # Shapes created without Factory
├── tsconfig.json                    # TypeScript config file
├── package.json                     # Node project config
└── README.md                        # Project documentation
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
cd Creational_Patterns\Factory_Pattern\with-factory
node with-factory.js
cd Creational_Patterns\Factory_Pattern\without-factory
node without-factory.js
```
 ### Comparison: With vs Without Factory

✅ Using Factory (shape-factory-pattern.ts)

Centralized object creation logic

Easier to manage and extend (e.g., adding new shapes)

Reduces code duplication

❌ Without Factory (shape-without-factory.ts)

Client must know and directly instantiate concrete classes

Harder to maintain when new types are added

Increases coupling between client code and implementations

