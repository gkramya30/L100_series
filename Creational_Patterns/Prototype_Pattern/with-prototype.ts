class Car {
  constructor(public brand: string, public color: string) {}

  clone(): Car {
    return new Car(this.brand, this.color);
  }

  show() {
    console.log(`Car: ${this.brand}, Color: ${this.color}`);
  }
}

const car1 = new Car("Honda", "Blue");
const car2 = car1.clone(); // cloned!

car1.show();
car2.show();
