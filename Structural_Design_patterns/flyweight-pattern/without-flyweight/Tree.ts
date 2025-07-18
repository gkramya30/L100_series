export class Tree {
    constructor(
        private x: number,
        private y: number,
        private name: string,
        private color: string,
        private texture: string
    ) {}

    display(): void {
        console.log(`Drawing ${this.name} tree at (${this.x}, ${this.y}) with color ${this.color} and texture ${this.texture}`);
    }
}
