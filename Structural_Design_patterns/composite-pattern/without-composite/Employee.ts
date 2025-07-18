export class Employee {
    constructor(public name: string, public role: string) {}

    showDetails(): void {
        console.log(`- ${this.role}: ${this.name}`);
    }
}
