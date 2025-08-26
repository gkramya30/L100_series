export class Laptop {
  constructor(
    public brand: string,
    public cpu?: string,
    public gpu?: string,
    public ram?: string,
    public storage?: string,
    public os?: string,
    public display?: string,
    public battery?: string,
    public accessories?: string[],
    public price?: number
  ) {}

  specs() {
    console.log("===== Laptop Specs =====");
    console.log(`Brand: ${this.brand}`);
    console.log(`CPU: ${this.cpu ?? "N/A"}`);
    console.log(`GPU: ${this.gpu ?? "N/A"}`);
    console.log(`RAM: ${this.ram ?? "N/A"}`);
    console.log(`Storage: ${this.storage ?? "N/A"}`);
    console.log(`OS: ${this.os ?? "N/A"}`);
    console.log(`Display: ${this.display ?? "N/A"}`);
    console.log(`Battery: ${this.battery ?? "N/A"}`);
    console.log(`Accessories: ${this.accessories?.join(", ") ?? "None"}`);
    console.log(`Price: $${this.price ?? 0}`);
    console.log("========================");
  }
}
