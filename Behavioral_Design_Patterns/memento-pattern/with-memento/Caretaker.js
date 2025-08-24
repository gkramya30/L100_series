"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Caretaker = void 0;
var Caretaker = /** @class */ (function () {
    function Caretaker() {
        this.history = [];
    }
    Caretaker.prototype.addMemento = function (memento) {
        this.history.push(memento);
    };
    Caretaker.prototype.getMemento = function (index) {
        return this.history[index];
    };
    return Caretaker;
}());
exports.Caretaker = Caretaker;
