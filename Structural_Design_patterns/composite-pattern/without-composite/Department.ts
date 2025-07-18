import { Employee } from "./Employee";

export class Department {
    constructor(
        public name: string,
        public employees: Employee[] = [],
        public subDepartments: Department[] = []
    ) {}

    showDetails(indent: string = ""): void {
        console.log(`${indent}+ Department: ${this.name}`);
        this.employees.forEach(e => {
            console.log(`${indent}  - ${e.role}: ${e.name}`);
        });
        this.subDepartments.forEach(sub => sub.showDetails(indent + "  "));
    }
}
