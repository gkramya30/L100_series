"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Coffee_1 = require("./Coffee");
const MilkDecorator_1 = require("./MilkDecorator");
const SugarDecorator_1 = require("./SugarDecorator");
const WhipDecorator_1 = require("./WhipDecorator");
let coffee = new Coffee_1.BasicCoffee();
coffee = new MilkDecorator_1.MilkDecorator(coffee);
coffee = new SugarDecorator_1.SugarDecorator(coffee);
coffee = new WhipDecorator_1.WhipDecorator(coffee);
console.log(coffee.getDescription()); // Basic Coffee, Milk, Sugar, Whipped Cream
console.log(`Total: $${coffee.getCost()}`); // Total: $8
