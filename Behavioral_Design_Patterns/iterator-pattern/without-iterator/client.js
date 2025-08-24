var Book = /** @class */ (function () {
    function Book(title, author) {
        this.title = title;
        this.author = author;
    }
    return Book;
}());
var Library = /** @class */ (function () {
    function Library() {
        this.books = [];
    }
    Library.prototype.addBook = function (book) {
        this.books.push(book);
    };
    // No iterator, so expose raw data structure
    Library.prototype.getBooks = function () {
        return this.books;
    };
    return Library;
}());
// Test
var library = new Library();
library.addBook(new Book("Design Patterns", "GoF"));
library.addBook(new Book("Clean Code", "Robert C. Martin"));
library.addBook(new Book("Refactoring", "Martin Fowler"));
// ❌ Client manually handles iteration
var books = library.getBooks();
var index = 0;
while (index < books.length) {
    var book = books[index];
    console.log("".concat(book.title, " by ").concat(book.author));
    index++; // manual traversal
}
