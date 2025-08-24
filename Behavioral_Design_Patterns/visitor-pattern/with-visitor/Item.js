"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Electronics = exports.Book = void 0;
var Book = /** @class */ (function () {
    function Book(title, price) {
        this.title = title;
        this.price = price;
    }
    Book.prototype.accept = function (visitor) {
        visitor.visitBook(this);
    };
    return Book;
}());
exports.Book = Book;
var Electronics = /** @class */ (function () {
    function Electronics(name, price) {
        this.name = name;
        this.price = price;
    }
    Electronics.prototype.accept = function (visitor) {
        visitor.visitElectronics(this);
    };
    return Electronics;
}());
exports.Electronics = Electronics;
