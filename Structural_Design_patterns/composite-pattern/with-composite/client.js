"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Employee_1 = require("./Employee");
const Department_1 = require("./Department");
// Leaf nodes
const alice = new Employee_1.Employee("Alice", "Developer");
const bob = new Employee_1.Employee("Bob", "Designer");
const charlie = new Employee_1.Employee("Charlie", "Manager");
// Sub Department
const designDept = new Department_1.Department("Design Department");
designDept.add(bob);
// Main Department
const engineeringDept = new Department_1.Department("Engineering Department");
engineeringDept.add(alice);
engineeringDept.add(charlie);
engineeringDept.add(designDept);
// Show structure
engineeringDept.showDetails();
