import { Coffee } from "./Coffee";

export class WhipDecorator implements Coffee {
  constructor(private coffee: Coffee) {}

  getCost(): number {
    return this.coffee.getCost() + 1.5;
  }

  getDescription(): string {
    return this.coffee.getDescription() + ", Whipped Cream";
  }
}
