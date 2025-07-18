"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TreeType = void 0;
class TreeType {
    constructor(name, color, texture) {
        this.name = name;
        this.color = color;
        this.texture = texture;
    }
    display(x, y) {
        console.log(`Drawing ${this.name} tree at (${x}, ${y}) with color ${this.color} and texture ${this.texture}`);
    }
}
exports.TreeType = TreeType;
