import { LaptopBuilder } from "./LaptopBuilder";

// Simple Laptop
const laptop1 = new LaptopBuilder("Lenovo")
  .setCPU("Intel i5")
  .setRAM("8GB")
  .setStorage("512GB SSD")
  .setOS("Windows 11 Home")
  .setPrice(750)
  .build();

// Gaming Laptop
const laptop2 = new LaptopBuilder("Asus ROG")
  .setCPU("Intel i9")
  .setGPU("NVIDIA RTX 4070")
  .setRAM("32GB")
  .setStorage("2TB SSD")
  .setOS("Windows 11 Pro")
  .setBattery("90Wh")
  .setDisplay("17.3-inch QHD 165Hz")
  .addAccessories("Gaming Mouse", "RGB Keyboard", "Cooling Pad")
  .setPrice(2500)
  .build();

// UltraBook
const laptop3 = new LaptopBuilder("Apple MacBook Pro")
  .setCPU("Apple M2 Pro")
  .setRAM("16GB")
  .setStorage("1TB SSD")
  .setOS("macOS Ventura")
  .setBattery("100Wh")
  .setDisplay("16-inch Retina XDR")
  .addAccessories("USB-C Hub", "AppleCare+")
  .setPrice(3000)
  .build();

laptop1.specs();
laptop2.specs();
laptop3.specs();
