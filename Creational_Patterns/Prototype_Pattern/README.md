# Prototype Pattern in TypeScript

## 1. What is the Prototype Pattern?

The Prototype Pattern is a creational design pattern used to create new objects by copying (cloning) existing objects rather than creating new instances from scratch. This allows for efficient object creation, especially when the instantiation process is costly.

In this pattern, an object (prototype) provides a method to clone itself, enabling easy duplication of its properties and state.

---

## 2. How is the Prototype Pattern Useful in Coding?

- **Efficiency:** Cloning objects is often faster than creating new instances and initializing them.
- **Simplifies object creation:** Particularly useful when creating objects with many similar attributes or a complex setup.
- **Reduces dependency:** New objects can be created without relying heavily on constructors or factories.
- **Avoids subclassing:** Objects can be copied directly without creating many subclasses for variations.

---

## 3. File Structure (TypeScript)

```
prototype-pattern/
│── prototype.ts         # Prototype interface
│── employee.ts          # Concrete Prototype (Employee class)
│── client.ts            # Client code (uses cloning)
│── tsconfig.json        # TypeScript config (if needed)

```

## 4. How to Run

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
cd Creational_Patterns\Prototype_Pattern\with-prototype
node with-prototype.js
cd Creational_Patterns\Prototype_Pattern\without-prototype
node without-prototype.js
```

### 5️. Comparison: With vs Without Prototype Pattern

✅ **Using Prototype Pattern (`CarWithPrototype.ts`)**

- Objects are cloned using a built-in `clone()` method.
- An efficient and clean way to duplicate objects with the same properties.
- Reduces boilerplate and prevents errors from manual copying.
- Useful for creating many similar objects quickly.


### ❌ **Without Prototype Pattern** (`CarWithoutPrototype.ts`)

- Objects are manually copied by reassigning each property.
- More verbose and error-prone, especially with many properties.
- Manual copying can lead to inconsistencies if a property is missed.
- Less maintainable and scalable as complexity grows.


