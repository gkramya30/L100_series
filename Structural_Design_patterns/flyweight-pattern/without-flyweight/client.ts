import { Tree } from "./Tree";

const forest: Tree[] = [];

forest.push(new Tree(1, 1, "Oak", "Green", "Rough"));
forest.push(new Tree(2, 3, "Pine", "Dark Green", "Smooth"));
forest.push(new Tree(5, 1, "Oak", "Green", "Rough"));
forest.push(new Tree(10, 6, "Cherry", "Pink", "Glossy"));
forest.push(new Tree(15, 3, "Oak", "Green", "Rough"));

console.log("\n--- Forest Display ---");
forest.forEach(tree => tree.display());
