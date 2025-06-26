// without-builder.ts

class Laptop {
  constructor(
    public brand: string,
    public ram?: string,
    public storage?: string
  ) {}

  specs() {
    console.log(`Brand: ${this.brand}, RAM: ${this.ram ?? "N/A"}, Storage: ${this.storage ?? "N/A"}`);
  }
}

const laptop1 = new Laptop("Dell");
const laptop2 = new Laptop("HP", "16GB", "512GB");

laptop1.specs();
laptop2.specs();
