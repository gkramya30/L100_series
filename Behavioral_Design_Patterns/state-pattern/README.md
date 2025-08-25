#  State Pattern in TypeScript

This repository showcases the **State Design Pattern** in TypeScript using a scenario where an object's behavior changes based on its internal state. It demonstrates the pattern’s advantage over conditional logic.

---

## What is the State Pattern?

The **State Pattern** is a **Behavioral Design Pattern** that allows an object to change its behavior when its internal state changes—making the object appear to change its class. It encapsulates state-specific behavior into separate classes and delegates actions to the current state object.

---

## How is It Useful in Coding?

Key benefits of using the State Pattern:

-  **Eliminates large conditional statements** by encapsulating behavioral differences in concrete state classes.
-  **Organizes state-specific logic** within dedicated classes, improving code readability and maintenance.
-  **Enables dynamic behavior changes at runtime**, as the context object transitions between states.
-  **Facilitates easy addition of new states** without modifying the existing codebase.

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
node client.js
node client.js
```
### Comparison: With vs Without State Pattern

#### With State Pattern

Behavior is encapsulated in separate state classes, each handling state-specific logic.

The Context delegates behavior to the current state object and transitions between states seamlessly.

Enhances modularity and makes state transitions explicit and easy to control.

More maintainable and extendable—adding new states doesn't disrupt existing behavior flow.

#### Without State Pattern

Logic is tangled within conditionals (if-else or switch), leading to complex, brittle code.

Behavior becomes harder to manage and often duplicated across contexts.

Any new state or change in behavior requires modifying existing conditional logic scattered across the codebase, hurting maintainability.
