class Book {
  constructor(public title: string, public author: string) {}
}

class Library {
  private books: Book[] = [];

  addBook(book: Book): void {
    this.books.push(book);
  }

  // No iterator, so expose raw data structure
  getBooks(): Book[] {
    return this.books;
  }
}

// Test
const library = new Library();
library.addBook(new Book("Design Patterns", "GoF"));
library.addBook(new Book("Clean Code", "Robert C. Martin"));
library.addBook(new Book("Refactoring", "Martin Fowler"));

// ❌ Client manually handles iteration
const books = library.getBooks();
let index = 0;

while (index < books.length) {
  const book = books[index];
  console.log(`${book.title} by ${book.author}`);
  index++; // manual traversal
}
