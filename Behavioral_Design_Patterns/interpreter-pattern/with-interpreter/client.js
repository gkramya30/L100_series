"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Context_1 = require("./Context");
var Expression_1 = require("./Expression");
// Define some products
var products = [
    { category: "Electronics", price: 800 },
    { category: "Electronics", price: 1500 },
    { category: "Books", price: 15 },
    { category: "Books", price: 45 },
];
// Build rule: category = 'Electronics' AND price < 1000
var electronicsUnder1000 = new Expression_1.AndExpression(new Expression_1.CategoryExpression("Electronics"), new Expression_1.PriceLessThanExpression(1000));
// Build rule: category = 'Books' OR price < 20
var booksOrCheap = new Expression_1.OrExpression(new Expression_1.CategoryExpression("Books"), new Expression_1.PriceLessThanExpression(20));
// Apply rules
console.log("Electronics under $1000:");
products.forEach(function (p) {
    if (electronicsUnder1000.interpret(new Context_1.Context(p))) {
        console.log("\u2705 ".concat(p.category, " - $").concat(p.price));
    }
});
console.log("\nBooks or items under $20:");
products.forEach(function (p) {
    if (booksOrCheap.interpret(new Context_1.Context(p))) {
        console.log("\u2705 ".concat(p.category, " - $").concat(p.price));
    }
});
