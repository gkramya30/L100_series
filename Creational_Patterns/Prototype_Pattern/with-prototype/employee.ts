import { Prototype } from "./prototype";

export class Employee implements Prototype<Employee> {
  constructor(
    public name: string,
    public position: string,
    public department: string,
    public salary: number,
    public skills: string[] = []
  ) {}

  clone(): Employee {
    // Deep copy for array
    return new Employee(
      this.name,
      this.position,
      this.department,
      this.salary,
      [...this.skills] 
    );
  }

  showDetails(): void {
    console.log(
      `👤 ${this.name} | Position: ${this.position} | Dept: ${this.department} | Salary: $${this.salary}`
    );
    console.log(`   Skills: ${this.skills.join(", ")}`);
  }
}
