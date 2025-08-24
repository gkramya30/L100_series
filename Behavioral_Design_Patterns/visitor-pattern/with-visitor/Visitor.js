"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DiscountVisitor = void 0;
var DiscountVisitor = /** @class */ (function () {
    function DiscountVisitor() {
    }
    DiscountVisitor.prototype.visitBook = function (book) {
        var discount = book.price * 0.1; // 10% discount
        console.log("Book: ".concat(book.title, ", Price: $").concat(book.price, ", Discount: $").concat(discount));
    };
    DiscountVisitor.prototype.visitElectronics = function (electronics) {
        var discount = electronics.price * 0.2; // 20% discount
        console.log("Electronics: ".concat(electronics.name, ", Price: $").concat(electronics.price, ", Discount: $").concat(discount));
    };
    return DiscountVisitor;
}());
exports.DiscountVisitor = DiscountVisitor;
