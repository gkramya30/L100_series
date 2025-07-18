import { TreeType } from "./TreeType";

export class TreeFactory {
    private static treeTypes: { [key: string]: TreeType } = {};

    static getTreeType(name: string, color: string, texture: string): TreeType {
        const key = `${name}_${color}_${texture}`;
        if (!this.treeTypes[key]) {
            console.log(`Creating TreeType for ${key}`);
            this.treeTypes[key] = new TreeType(name, color, texture);
        }
        return this.treeTypes[key];
    }
}
