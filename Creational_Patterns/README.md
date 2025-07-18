# 🧱 Creational Design Patterns

This repository focuses on **Creational Design Patterns** in software engineering, which deal with object creation mechanisms. These patterns abstract the instantiation process, making the system independent of how its objects are created, composed, and represented.

---

## 🔹 1. Types of Creational Design Patterns

### 1️⃣ Singleton
- Ensures that a class has only **one instance** and provides a global point of access to it.
- Useful for shared resources like configuration managers, logging services, etc.

### 2️⃣ Factory Method
- Defines an **interface** for creating an object but lets subclasses **decide which class to instantiate**.
- Promotes loose coupling by eliminating the need to bind application-specific classes into the code.

### 3️⃣ Abstract Factory
- Produces **families of related or dependent objects** without specifying their concrete classes.
- Useful when the system should be independent of how its products are created.

### 4️⃣ Builder
- Separates the **construction of a complex object** from its representation.
- The same construction process can create different representations.

### 5️⃣ Prototype
- Creates new objects by **cloning** an existing object (prototype).
- Useful when object creation is costly or involves complex setup.

---

## 🔸 2. Use of Creational Design Patterns

- **Decoupling object creation** from implementation details.
- Enhancing **flexibility** in configuring objects dynamically.
- Encouraging **code reuse** and **scalability** by reusing initialization logic.
- Simplifying the code that creates objects, especially complex or interdependent ones.
- Supporting **lazy instantiation** and **controlled access** to instances (e.g., Singleton).

---


