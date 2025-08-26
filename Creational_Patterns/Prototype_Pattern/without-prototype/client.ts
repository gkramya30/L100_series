import { Employee } from "./employee";

// Instead of cloning, we manually create new employees

const emp1 = new Employee("Alice", "Software Engineer", "IT", 80000, [
  "TypeScript",
  "React",
  "Node.js"
]);

console.log("Original Employee:");
emp1.showDetails();

// Manually create new employee (duplicate logic!)
const emp2 = new Employee("Bob", "Software Engineer", "IT", 80000, [
  "TypeScript",
  "React",
  "Node.js",
  "GraphQL"
]);

console.log("\nSecond Employee (manually created):");
emp2.showDetails();

// Another manual creation
const emp3 = new Employee("Charlie", "Software Engineer", "R&D", 90000, [
  "TypeScript",
  "React",
  "Node.js",
  "AI/ML"
]);

console.log("\nThird Employee (manually created):");
emp3.showDetails();

// Notice how we are repeating skill/role data each time
