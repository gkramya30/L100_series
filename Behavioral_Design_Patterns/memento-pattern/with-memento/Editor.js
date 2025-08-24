"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Editor = void 0;
var Memento_1 = require("./Memento");
var Editor = /** @class */ (function () {
    function Editor() {
        this.content = "";
    }
    Editor.prototype.type = function (words) {
        this.content += words;
    };
    Editor.prototype.getContent = function () {
        return this.content;
    };
    Editor.prototype.save = function () {
        return new Memento_1.Memento(this.content);
    };
    Editor.prototype.restore = function (memento) {
        this.content = memento.getState();
    };
    return Editor;
}());
exports.Editor = Editor;
