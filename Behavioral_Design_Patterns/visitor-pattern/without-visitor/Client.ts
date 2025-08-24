class Book {
  constructor(public title: string, public price: number) {}

  getDiscount(): void {
    const discount = this.price * 0.1; // 10%
    console.log(`Book: ${this.title}, Price: $${this.price}, Discount: $${discount}`);
  }
}

class Electronics {
  constructor(public name: string, public price: number) {}

  getDiscount(): void {
    const discount = this.price * 0.2; // 20%
    console.log(`Electronics: ${this.name}, Price: $${this.price}, Discount: $${discount}`);
  }
}

// Test
const items = [
  new Book("Design Patterns", 50),
  new Electronics("Smartphone", 500),
];

for (const item of items) {
  item.getDiscount();
}
