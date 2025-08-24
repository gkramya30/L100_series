import { Book, Electronics } from "./Item";
import { DiscountVisitor } from "./Visitor";

const items = [
  new Book("Design Patterns", 50),
  new Electronics("Smartphone", 500),
];

const discountVisitor = new DiscountVisitor();

for (const item of items) {
  item.accept(discountVisitor);
}
