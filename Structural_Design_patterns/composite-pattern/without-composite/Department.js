"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Department = void 0;
class Department {
    constructor(name, employees = [], subDepartments = []) {
        this.name = name;
        this.employees = employees;
        this.subDepartments = subDepartments;
    }
    showDetails(indent = "") {
        console.log(`${indent}+ Department: ${this.name}`);
        this.employees.forEach(e => {
            console.log(`${indent}  - ${e.role}: ${e.name}`);
        });
        this.subDepartments.forEach(sub => sub.showDetails(indent + "  "));
    }
}
exports.Department = Department;
