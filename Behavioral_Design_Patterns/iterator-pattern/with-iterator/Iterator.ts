import { Book } from "./Book";

// Iterator interface
export interface Iterator<T> {
  hasNext(): boolean;
  next(): T;
}

// Collection interface
export interface Aggregate<T> {
  createIterator(): Iterator<T>;
}

// Concrete Collection
export class Library implements Aggregate<Book> {
  private books: Book[] = [];

  addBook(book: Book): void {
    this.books.push(book);
  }

  createIterator(): Iterator<Book> {
    return new LibraryIterator(this.books);
  }
}

// Concrete Iterator
class LibraryIterator implements Iterator<Book> {
  private index = 0;

  constructor(private books: Book[]) {}

  hasNext(): boolean {
    return this.index < this.books.length;
  }

  next(): Book {
    return this.books[this.index++];
  }
}
