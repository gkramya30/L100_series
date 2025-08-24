"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Memento = void 0;
// Memento stores state
var Memento = /** @class */ (function () {
    function Memento(state) {
        this.state = state;
    }
    Memento.prototype.getState = function () {
        return this.state;
    };
    return Memento;
}());
exports.Memento = Memento;
