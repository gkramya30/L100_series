import { TreeType } from "./TreeType";

export class Tree {
    constructor(private x: number, private y: number, private type: TreeType) {}

    display(): void {
        this.type.display(this.x, this.y);
    }
}
