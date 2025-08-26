import { Laptop } from "./Laptop";

export class LaptopBuilder {
  ram?: string;
  storage?: string;
  cpu?: string;
  gpu?: string;
  os?: string;
  battery?: string;
  display?: string;
  accessories?: string[];
  price?: number;

  constructor(public brand: string) {}

  setCPU(cpu: string): this {
    this.cpu = cpu;
    return this;
  }

  setGPU(gpu: string): this {
    this.gpu = gpu;
    return this;
  }

  setRAM(ram: string): this {
    this.ram = ram;
    return this;
  }

  setStorage(storage: string): this {
    this.storage = storage;
    return this;
  }

  setOS(os: string): this {
    this.os = os;
    return this;
  }

  setBattery(battery: string): this {
    this.battery = battery;
    return this;
  }

  setDisplay(display: string): this {
    this.display = display;
    return this;
  }

  addAccessories(...items: string[]): this {
    if (!this.accessories) this.accessories = [];
    this.accessories.push(...items);
    return this;
  }

  setPrice(price: number): this {
    this.price = price;
    return this;
  }

  build(): Laptop {
    return new Laptop(this);
  }
}
