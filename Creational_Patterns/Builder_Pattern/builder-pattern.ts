// builder-pattern.ts

class Laptop {
  brand: string;
  ram?: string;
  storage?: string;

  constructor(builder: LaptopBuilder) {
    this.brand = builder.brand;
    this.ram = builder.ram;
    this.storage = builder.storage;
  }

  specs() {
    console.log(`Brand: ${this.brand}, RAM: ${this.ram ?? "N/A"}, Storage: ${this.storage ?? "N/A"}`);
  }
}

class LaptopBuilder {
  ram?: string;
  storage?: string;

  constructor(public brand: string) {}

  setRAM(ram: string): this {
    this.ram = ram;
    return this;
  }

  setStorage(storage: string): this {
    this.storage = storage;
    return this;
  }

  build(): Laptop {
    return new Laptop(this);
  }
}

const laptop1 = new LaptopBuilder("Lenovo").build();
const laptop2 = new LaptopBuilder("Acer").setRAM("8GB").setStorage("1TB").build();

laptop1.specs();
laptop2.specs();
