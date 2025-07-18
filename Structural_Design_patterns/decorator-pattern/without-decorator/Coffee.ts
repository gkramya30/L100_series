export class Coffee {
  private milk: boolean;
  private sugar: boolean;
  private whip: boolean;

  constructor(milk: boolean, sugar: boolean, whip: boolean) {
    this.milk = milk;
    this.sugar = sugar;
    this.whip = whip;
  }

  getCost(): number {
    let cost = 5;
    if (this.milk) cost += 1;
    if (this.sugar) cost += 0.5;
    if (this.whip) cost += 1.5;
    return cost;
  }

  getDescription(): string {
    let desc = "Basic Coffee";
    if (this.milk) desc += ", Milk";
    if (this.sugar) desc += ", Sugar";
    if (this.whip) desc += ", Whipped Cream";
    return desc;
  }
}
