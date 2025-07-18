"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Coffee = void 0;
class Coffee {
    constructor(milk, sugar, whip) {
        this.milk = milk;
        this.sugar = sugar;
        this.whip = whip;
    }
    getCost() {
        let cost = 5;
        if (this.milk)
            cost += 1;
        if (this.sugar)
            cost += 0.5;
        if (this.whip)
            cost += 1.5;
        return cost;
    }
    getDescription() {
        let desc = "Basic Coffee";
        if (this.milk)
            desc += ", Milk";
        if (this.sugar)
            desc += ", Sugar";
        if (this.whip)
            desc += ", Whipped Cream";
        return desc;
    }
}
exports.Coffee = Coffee;
