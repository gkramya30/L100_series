"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Department = void 0;
class Department {
    constructor(name) {
        this.name = name;
        this.children = [];
    }
    add(unit) {
        this.children.push(unit);
    }
    showDetails(indent = "") {
        console.log(`${indent}+ Department: ${this.name}`);
        for (const child of this.children) {
            child.showDetails(indent + "  ");
        }
    }
}
exports.Department = Department;
