import { Coffee } from "./Coffee";

const coffee = new Coffee(true, true, true);

console.log(coffee.getDescription()); // Basic Coffee, Milk, Sugar, Whipped Cream
console.log(`Total: $${coffee.getCost()}`); // Total: $8
