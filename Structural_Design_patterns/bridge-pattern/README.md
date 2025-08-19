# 🌉 Bridge Pattern in TypeScript

This repository demonstrates the **Bridge Design Pattern** in TypeScript using a device and remote control example. It shows the difference between using a bridge to decouple abstraction from implementation versus tightly binding them together.

---

## What is the Bridge Pattern?

The **Bridge Pattern** is a **Structural Design Pattern** that decouples an abstraction from its implementation so that the two can vary independently.  

It is useful when both the abstraction and its implementation may evolve over time, and you want to avoid a rigid hierarchy.

---

## How is It Useful in Coding?

Using the Bridge pattern provides several benefits:

- ✅ Decouples **abstractions** from **implementations**  
- ✅ Makes code **more flexible and extensible**  
- ✅ Avoids an explosion of subclasses (combinatorial growth)  
- ✅ Encourages **composition over inheritance**  

---

## Comparison: With vs Without Bridge

### ✅ Using Bridge

- Remote controls (abstraction) work with different devices (implementation)  
- Devices can evolve independently from remotes  
- Reduces class explosion when combining multiple variants  

---

### ❌ Without Bridge

- Each remote is tightly coupled to a specific device  
- Requires separate classes for each combination (e.g., `TVRemote`, `RadioRemote`)  
- Harder to extend when new devices or remotes are added  

---
