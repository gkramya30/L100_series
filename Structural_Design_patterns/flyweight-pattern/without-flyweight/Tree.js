"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tree = void 0;
class Tree {
    constructor(x, y, name, color, texture) {
        this.x = x;
        this.y = y;
        this.name = name;
        this.color = color;
        this.texture = texture;
    }
    display() {
        console.log(`Drawing ${this.name} tree at (${this.x}, ${this.y}) with color ${this.color} and texture ${this.texture}`);
    }
}
exports.Tree = Tree;
