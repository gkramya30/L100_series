import { Employee } from "./employee";

// Original employee
const emp1 = new Employee("Alice", "Software Engineer", "IT", 80000, [
  "TypeScript",
  "React",
  "Node.js"
]);

console.log("Original Employee:");
emp1.showDetails();

// Clone 1
const emp2 = emp1.clone();
emp2.name = "Bob";
emp2.skills.push("GraphQL");

console.log("\nCloned Employee (modified):");
emp2.showDetails();

// Clone 2
const emp3 = emp1.clone();
emp3.name = "Charlie";
emp3.department = "R&D";
emp3.salary = 90000;
emp3.skills.push("AI/ML");

console.log("\nAnother Cloned Employee:");
emp3.showDetails();

// Check original is unaffected
console.log("\nBack to Original Employee (unchanged):");
emp1.showDetails();
