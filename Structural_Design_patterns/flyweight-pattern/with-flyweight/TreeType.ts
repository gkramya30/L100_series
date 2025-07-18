export class TreeType {
    constructor(public name: string, public color: string, public texture: string) {}

    display(x: number, y: number): void {
        console.log(`Drawing ${this.name} tree at (${x}, ${y}) with color ${this.color} and texture ${this.texture}`);
    }
}
