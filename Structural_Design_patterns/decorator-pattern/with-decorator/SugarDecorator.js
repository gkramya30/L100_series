"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SugarDecorator = void 0;
class SugarDecorator {
    constructor(coffee) {
        this.coffee = coffee;
    }
    getCost() {
        return this.coffee.getCost() + 0.5;
    }
    getDescription() {
        return this.coffee.getDescription() + ", Sugar";
    }
}
exports.SugarDecorator = SugarDecorator;
