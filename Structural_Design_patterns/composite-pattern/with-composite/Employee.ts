import { IOrganizationUnit } from "./IOrganizationUnit";

export class Employee implements IOrganizationUnit {
    constructor(private name: string, private role: string) {}

    showDetails(indent: string = ""): void {
        console.log(`${indent}- ${this.role}: ${this.name}`);
    }
}
