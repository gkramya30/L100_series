"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Coffee_1 = require("./Coffee");
const coffee = new Coffee_1.Coffee(true, true, true);
console.log(coffee.getDescription()); // Basic Coffee, Milk, Sugar, Whipped Cream
console.log(`Total: $${coffee.getCost()}`); // Total: $8
