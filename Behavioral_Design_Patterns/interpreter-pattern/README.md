# ​ Interpreter Pattern in TypeScript

This repository demonstrates the **Interpreter Design Pattern** in TypeScript using a basic expression evaluation example. It illustrates how to interpret and evaluate language constructs through a structured design.

---

## What is the Interpreter Pattern?

The **Interpreter Pattern** is a **Behavioral Design Pattern** that defines a language's grammar and provides an interpreter to process statements in that language. It represents each rule or symbol in the language grammar as a class, allowing complex expressions to be interpreted via a recursive structure :contentReference

---

## How is It Useful in Coding?

The Interpreter pattern offers several valuable benefits:

-  It allows you to **represent a grammar using a class hierarchy** (e.g., terminal and non-terminal expressions) and evaluate expressions systematically 
-  The expression structure forms a **recursive composition (AST)** that the interpreter can traverse to evaluate complex sentences
-  It’s ideal for applications like **calculators**, **rule engines**, **configuration file parsers**, or **domain-specific languages (DSLs)** where expressions need parsing and evaluation 

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
### Comparison: With vs Without Interpreter

#### Using Interpreter

Grammar and interpretation logic are encapsulated within specific expression classes.

Complex expressions are evaluated by traversing a structured representation (e.g., abstract syntax tree).

Adding new operations or extending grammar is easy—just introduce a new expression class.

Clear separation of responsibilities and modular design improve extensibility.

#### Without Interpreter

Code relies on manual parsing and hardcoded conditional logic to evaluate expressions.

Introducing new operations often requires modifying central parsing logic.

Leads to tightly coupled, harder-to-maintain implementation as grammar and logic grow.
