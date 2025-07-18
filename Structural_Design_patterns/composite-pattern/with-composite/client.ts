import { Employee } from "./Employee";
import { Department } from "./Department";

// Leaf nodes
const alice = new Employee("Alice", "Developer");
const bob = new Employee("Bob", "Designer");
const charlie = new Employee("Charlie", "Manager");

// Sub Department
const designDept = new Department("Design Department");
designDept.add(bob);

// Main Department
const engineeringDept = new Department("Engineering Department");
engineeringDept.add(alice);
engineeringDept.add(charlie);
engineeringDept.add(designDept);

// Show structure
engineeringDept.showDetails();
