import { Book } from "./Book";
import { Library } from "./Iterator";

const library = new Library();
library.addBook(new Book("Design Patterns", "GoF"));
library.addBook(new Book("Clean Code", "Robert C. Martin"));
library.addBook(new Book("Refactoring", "Martin Fowler"));

// Use iterator
const iterator = library.createIterator();
while (iterator.hasNext()) {
  const book = iterator.next();
  console.log(`${book.title} by ${book.author}`);
}
