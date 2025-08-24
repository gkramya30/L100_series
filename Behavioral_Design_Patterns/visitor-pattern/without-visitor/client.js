var Book = /** @class */ (function () {
    function Book(title, price) {
        this.title = title;
        this.price = price;
    }
    Book.prototype.getDiscount = function () {
        var discount = this.price * 0.1; // 10%
        console.log("Book: ".concat(this.title, ", Price: $").concat(this.price, ", Discount: $").concat(discount));
    };
    return Book;
}());
var Electronics = /** @class */ (function () {
    function Electronics(name, price) {
        this.name = name;
        this.price = price;
    }
    Electronics.prototype.getDiscount = function () {
        var discount = this.price * 0.2; // 20%
        console.log("Electronics: ".concat(this.name, ", Price: $").concat(this.price, ", Discount: $").concat(discount));
    };
    return Electronics;
}());
// Test
var items = [
    new Book("Design Patterns", 50),
    new Electronics("Smartphone", 500),
];
for (var _i = 0, items_1 = items; _i < items_1.length; _i++) {
    var item = items_1[_i];
    item.getDiscount();
}
