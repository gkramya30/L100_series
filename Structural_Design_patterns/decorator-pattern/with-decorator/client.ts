import { BasicCoffee } from "./Coffee";
import { MilkDecorator } from "./MilkDecorator";
import { SugarDecorator } from "./SugarDecorator";
import { WhipDecorator } from "./WhipDecorator";

let coffee = new BasicCoffee();
coffee = new MilkDecorator(coffee);
coffee = new SugarDecorator(coffee);
coffee = new WhipDecorator(coffee);

console.log(coffee.getDescription()); // Basic Coffee, Milk, Sugar, Whipped Cream
console.log(`Total: $${coffee.getCost()}`); // Total: $8
