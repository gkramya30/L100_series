import { Book, Electronics } from "./Item";

export interface Visitor {
  visitBook(book: Book): void;
  visitElectronics(electronics: Electronics): void;
}

export class DiscountVisitor implements Visitor {
  visitBook(book: Book): void {
    const discount = book.price * 0.1; // 10% discount
    console.log(`Book: ${book.title}, Price: $${book.price}, Discount: $${discount}`);
  }

  visitElectronics(electronics: Electronics): void {
    const discount = electronics.price * 0.2; // 20% discount
    console.log(`Electronics: ${electronics.name}, Price: $${electronics.price}, Discount: $${discount}`);
  }
}
