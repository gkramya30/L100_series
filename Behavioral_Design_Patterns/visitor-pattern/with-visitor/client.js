"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Item_1 = require("./Item");
var Visitor_1 = require("./Visitor");
var items = [
    new Item_1.Book("Design Patterns", 50),
    new Item_1.Electronics("Smartphone", 500),
];
var discountVisitor = new Visitor_1.DiscountVisitor();
for (var _i = 0, items_1 = items; _i < items_1.length; _i++) {
    var item = items_1[_i];
    item.accept(discountVisitor);
}
