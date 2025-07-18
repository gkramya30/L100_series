"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WhipDecorator = void 0;
class WhipDecorator {
    constructor(coffee) {
        this.coffee = coffee;
    }
    getCost() {
        return this.coffee.getCost() + 1.5;
    }
    getDescription() {
        return this.coffee.getDescription() + ", Whipped Cream";
    }
}
exports.WhipDecorator = WhipDecorator;
