"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Book_1 = require("./Book");
var Iterator_1 = require("./Iterator");
var library = new Iterator_1.Library();
library.addBook(new Book_1.Book("Design Patterns", "GoF"));
library.addBook(new Book_1.Book("Clean Code", "Robert C. Martin"));
library.addBook(new Book_1.Book("Refactoring", "Martin Fowler"));
// Use iterator
var iterator = library.createIterator();
while (iterator.hasNext()) {
    var book = iterator.next();
    console.log("".concat(book.title, " by ").concat(book.author));
}
