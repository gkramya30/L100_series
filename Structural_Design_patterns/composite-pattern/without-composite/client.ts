import { Employee } from "./Employee";
import { Department } from "./Department";

const alice = new Employee("Alice", "Developer");
const bob = new Employee("Bob", "Designer");
const charlie = new Employee("Charlie", "Manager");

const designDept = new Department("Design Department", [bob]);

const engineeringDept = new Department("Engineering Department", [alice, charlie], [designDept]);

engineeringDept.showDetails();
