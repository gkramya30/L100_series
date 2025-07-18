"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TreeFactory = void 0;
const TreeType_1 = require("./TreeType");
class TreeFactory {
    static getTreeType(name, color, texture) {
        const key = `${name}_${color}_${texture}`;
        if (!this.treeTypes[key]) {
            console.log(`Creating TreeType for ${key}`);
            this.treeTypes[key] = new TreeType_1.TreeType(name, color, texture);
        }
        return this.treeTypes[key];
    }
}
exports.TreeFactory = TreeFactory;
TreeFactory.treeTypes = {};
