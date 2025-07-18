export interface Coffee {
  getCost(): number;
  getDescription(): string;
}

export class BasicCoffee implements Coffee {
  getCost(): number {
    return 5;
  }

  getDescription(): string {
    return "Basic Coffee";
  }
}
