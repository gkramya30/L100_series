import { Context, Product } from "./Context";
import { CategoryExpression, PriceLessThanExpression, AndExpression, OrExpression } from "./Expression";

// Define some products
const products: Product[] = [
  { category: "Electronics", price: 800 },
  { category: "Electronics", price: 1500 },
  { category: "Books", price: 15 },
  { category: "Books", price: 45 },
];

// Build rule: category = 'Electronics' AND price < 1000
const electronicsUnder1000 = new AndExpression(
  new CategoryExpression("Electronics"),
  new PriceLessThanExpression(1000)
);

// Build rule: category = 'Books' OR price < 20
const booksOrCheap = new OrExpression(
  new CategoryExpression("Books"),
  new PriceLessThanExpression(20)
);

// Apply rules
console.log("Electronics under $1000:");
products.forEach(p => {
  if (electronicsUnder1000.interpret(new Context(p))) {
    console.log(`✅ ${p.category} - $${p.price}`);
  }
});

console.log("\nBooks or items under $20:");
products.forEach(p => {
  if (booksOrCheap.interpret(new Context(p))) {
    console.log(`✅ ${p.category} - $${p.price}`);
  }
});
