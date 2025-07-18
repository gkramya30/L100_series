"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const TreeFactory_1 = require("./TreeFactory");
const Tree_1 = require("./Tree");
const forest = [];
function plantTree(x, y, name, color, texture) {
    const type = TreeFactory_1.TreeFactory.getTreeType(name, color, texture);
    const tree = new Tree_1.Tree(x, y, type);
    forest.push(tree);
}
// Plant 5 trees (some shared types)
plantTree(1, 1, "Oak", "Green", "Rough");
plantTree(2, 3, "Pine", "Dark Green", "Smooth");
plantTree(5, 1, "Oak", "Green", "Rough");
plantTree(10, 6, "Cherry", "Pink", "Glossy");
plantTree(15, 3, "Oak", "Green", "Rough");
console.log("\n--- Forest Display ---");
forest.forEach(tree => tree.display());
