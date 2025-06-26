class Car {
  constructor(public brand: string, public color: string) {}

  show() {
    console.log(`Car: ${this.brand}, Color: ${this.color}`);
  }
}

const car1 = new Car("Toyota", "Red");
// Manual copy
const car2 = new Car(car1.brand, car1.color);

car1.show();
car2.show();
