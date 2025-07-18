import { TreeFactory } from "./TreeFactory";
import { Tree } from "./Tree";

const forest: Tree[] = [];

function plantTree(x: number, y: number, name: string, color: string, texture: string) {
    const type = TreeFactory.getTreeType(name, color, texture);
    const tree = new Tree(x, y, type);
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
