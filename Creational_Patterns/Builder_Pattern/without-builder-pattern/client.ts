import { Laptop } from "./Laptop";

// Very minimal laptop (constructor with only brand)
const laptop1 = new Laptop("Dell");

// A medium config laptop
const laptop2 = new Laptop(
  "HP",
  "Intel i5",
  undefined,
  "16GB",
  "512GB SSD",
  "Windows 11",
  "15.6-inch FHD",
  "60Wh",
  ["Bag"],
  1200
);

// A high-end gaming laptop (constructor overload gets messy!)
const laptop3 = new Laptop(
  "Asus ROG",
  "Intel i9",
  "NVIDIA RTX 4080",
  "32GB",
  "2TB SSD",
  "Windows 11 Pro",
  "17.3-inch QHD 165Hz",
  "90Wh",
  ["Gaming Mouse", "Cooling Pad", "RGB Keyboard"],
  3000
);

laptop1.specs();
laptop2.specs();
laptop3.specs();
