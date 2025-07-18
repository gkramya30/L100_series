"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Employee = void 0;
class Employee {
    constructor(name, role) {
        this.name = name;
        this.role = role;
    }
    showDetails() {
        console.log(`- ${this.role}: ${this.name}`);
    }
}
exports.Employee = Employee;
