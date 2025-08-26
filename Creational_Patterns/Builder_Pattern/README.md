# 🏗️ Builder Pattern in TypeScript

This repository demonstrates the **Builder Design Pattern** in TypeScript using a simple laptop configuration example. It shows the difference between using a builder to construct complex objects versus creating them directly with constructors.

---

## What is the Builder Pattern?

The **Builder Pattern** is a **Creational Design Pattern** that provides a step-by-step way to build complex objects.  
It separates the construction of an object from its representation, making it possible to create different types or configurations of an object using the same construction process.

---

## How is It Useful in Coding?

Using the Builder pattern provides several benefits:

- ✅ Makes object creation **more flexible and readable**  
- ✅ Avoids **constructor overloads** with too many parameters  
- ✅ Simplifies **object configuration** step by step  
- ✅ Improves **code clarity and maintainability**  

---

## Project File Structure (TypeScript)

```plaintext
builder-pattern/
│
├── Laptop.ts
├── LaptopBuilder.ts
└── client.ts
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
cd Creational_Patterns\Builder_Pattern\builder-pattern
node builder-pattern.js
cd Creational_Patterns\Builder_Pattern\without-builder-pattern
node without-builder.js
```

### Comparison: With vs Without Builder

✅ Using Builder (builder-pattern.ts)

Step-by-step object creation

No need for multiple overloaded constructors

Cleaner and easier to read
```typescript
const laptop1 = new LaptopBuilder("Lenovo").build();
const laptop2 = new LaptopBuilder("Acer")
  .setRAM("8GB")
  .setStorage("1TB")
  .build();

laptop1.specs();
laptop2.specs();
```

❌ Without Builder (without-builder.ts)

Requires handling multiple constructor parameters directly

Becomes harder to maintain with many optional attributes

Can reduce readability
```typescript
const laptop1 = new Laptop("Dell");
const laptop2 = new Laptop("HP", "16GB", "512GB");

laptop1.specs();
laptop2.specs();
```

