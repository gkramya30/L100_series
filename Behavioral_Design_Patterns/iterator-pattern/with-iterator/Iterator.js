"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Library = void 0;
// Concrete Collection
var Library = /** @class */ (function () {
    function Library() {
        this.books = [];
    }
    Library.prototype.addBook = function (book) {
        this.books.push(book);
    };
    Library.prototype.createIterator = function () {
        return new LibraryIterator(this.books);
    };
    return Library;
}());
exports.Library = Library;
// Concrete Iterator
var LibraryIterator = /** @class */ (function () {
    function LibraryIterator(books) {
        this.books = books;
        this.index = 0;
    }
    LibraryIterator.prototype.hasNext = function () {
        return this.index < this.books.length;
    };
    LibraryIterator.prototype.next = function () {
        return this.books[this.index++];
    };
    return LibraryIterator;
}());
