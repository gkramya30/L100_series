"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrExpression = exports.AndExpression = exports.PriceLessThanExpression = exports.CategoryExpression = void 0;
// Terminal expressions
var CategoryExpression = /** @class */ (function () {
    function CategoryExpression(category) {
        this.category = category;
    }
    CategoryExpression.prototype.interpret = function (context) {
        return context.product.category === this.category;
    };
    return CategoryExpression;
}());
exports.CategoryExpression = CategoryExpression;
var PriceLessThanExpression = /** @class */ (function () {
    function PriceLessThanExpression(price) {
        this.price = price;
    }
    PriceLessThanExpression.prototype.interpret = function (context) {
        return context.product.price < this.price;
    };
    return PriceLessThanExpression;
}());
exports.PriceLessThanExpression = PriceLessThanExpression;
// Non-terminal expressions (AND, OR)
var AndExpression = /** @class */ (function () {
    function AndExpression(left, right) {
        this.left = left;
        this.right = right;
    }
    AndExpression.prototype.interpret = function (context) {
        return this.left.interpret(context) && this.right.interpret(context);
    };
    return AndExpression;
}());
exports.AndExpression = AndExpression;
var OrExpression = /** @class */ (function () {
    function OrExpression(left, right) {
        this.left = left;
        this.right = right;
    }
    OrExpression.prototype.interpret = function (context) {
        return this.left.interpret(context) || this.right.interpret(context);
    };
    return OrExpression;
}());
exports.OrExpression = OrExpression;
