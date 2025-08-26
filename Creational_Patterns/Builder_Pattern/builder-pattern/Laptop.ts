import { LaptopBuilder } from "./LaptopBuilder";

export class Laptop {
  brand: string;
  ram?: string;
  storage?: string;
  cpu?: string;
  gpu?: string;
  os?: string;
  battery?: string;
  display?: string;
  accessories?: string[];
  price?: number;

  constructor(builder: LaptopBuilder) {
    this.brand = builder.brand;
    this.ram = builder.ram;
    this.storage = builder.storage;
    this.cpu = builder.cpu;
    this.gpu = builder.gpu;
    this.os = builder.os;
    this.battery = builder.battery;
    this.display = builder.display;
    this.accessories = builder.accessories;
    this.price = builder.price;
  }

  specs() {
    console.log("===== Laptop Specs =====");
    console.log(`Brand: ${this.brand}`);
    console.log(`CPU: ${this.cpu ?? "N/A"}`);
    console.log(`GPU: ${this.gpu ?? "N/A"}`);
    console.log(`RAM: ${this.ram ?? "N/A"}`);
    console.log(`Storage: ${this.storage ?? "N/A"}`);
    console.log(`OS: ${this.os ?? "N/A"}`);
    console.log(`Battery: ${this.battery ?? "N/A"}`);
    console.log(`Display: ${this.display ?? "N/A"}`);
    console.log(`Accessories: ${this.accessories?.join(", ") ?? "None"}`);
    console.log(`Price: $${this.price ?? 0}`);
    console.log("========================");
  }
}
