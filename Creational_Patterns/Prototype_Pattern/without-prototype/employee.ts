export class Employee {
  constructor(
    public name: string,
    public position: string,
    public department: string,
    public salary: number,
    public skills: string[] = []
  ) {}

  showDetails(): void {
    console.log(
      `👤 ${this.name} | Position: ${this.position} | Dept: ${this.department} | Salary: $${this.salary}`
    );
    console.log(`   Skills: ${this.skills.join(", ")}`);
  }
}
