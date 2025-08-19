# 🪶 Flyweight Pattern in TypeScript

This repository demonstrates the **Flyweight Design Pattern** in TypeScript using a tree example. It shows how to share common state among multiple objects to reduce memory usage.

---

## What is the Flyweight Pattern?

The **Flyweight Pattern** is a **Structural Design Pattern** that allows programs to support **large numbers of objects efficiently** by sharing common parts of state instead of duplicating them.  

---

## How is It Useful in Coding?

Using the Flyweight pattern provides several benefits:

- ✅ Saves **memory** by reusing shared objects  
- ✅ Improves **performance** when handling many similar objects  
- ✅ Reduces **object creation overhead**  
- ✅ Separates shared data from unique data for clarity  

---

## Comparison: With vs Without Flyweight

### ✅ Using Flyweight

- Shared objects are reused for common properties  
- Memory usage is minimized even with thousands of similar objects  
- Client supplies only unique/extrinsic state  

---

### ❌ Without Flyweight

- Each object stores **all properties**, even if shared  
- Leads to **high memory usage** when many objects are created  
- Inefficient and harder to scale  

---
