"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Navigator = void 0;
var Navigator = /** @class */ (function () {
    function Navigator(strategy) {
        this.strategy = strategy;
    }
    Navigator.prototype.setStrategy = function (strategy) {
        this.strategy = strategy;
    };
    Navigator.prototype.navigate = function (start, end) {
        this.strategy.calculateRoute(start, end);
    };
    return Navigator;
}());
exports.Navigator = Navigator;
