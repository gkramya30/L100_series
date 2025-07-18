import { IOrganizationUnit } from "./IOrganizationUnit";

export class Department implements IOrganizationUnit {
    private children: IOrganizationUnit[] = [];

    constructor(private name: string) {}

    add(unit: IOrganizationUnit): void {
        this.children.push(unit);
    }

    showDetails(indent: string = ""): void {
        console.log(`${indent}+ Department: ${this.name}`);
        for (const child of this.children) {
            child.showDetails(indent + "  ");
        }
    }
}
