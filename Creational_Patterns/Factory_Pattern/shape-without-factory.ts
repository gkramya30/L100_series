// shape-without-factory.ts

class Circle {
  draw(): void {
    console.log("Drawing a Circle");
  }
}

class Square {
  draw(): void {
    console.log("Drawing a Square");
  }
}

// Client manually creates instances
const circle = new Circle();
const square = new Square();

circle.draw();
square.draw();
