// shape-factory-pattern.ts

interface Shape {
  draw(): void;
}

class Circle implements Shape {
  draw(): void {
    console.log("Drawing a Circle");
  }
}

class Square implements Shape {
  draw(): void {
    console.log("Drawing a Square");
  }
}

class ShapeFactory {
  static getShape(shapeType: string): Shape | null {
    if (shapeType === "circle") {
      return new Circle();
    } else if (shapeType === "square") {
      return new Square();
    } else {
      return null;
    }
  }
}

// Client uses factory to get objects
const shape1 = ShapeFactory.getShape("circle");
shape1?.draw();

const shape2 = ShapeFactory.getShape("square");
shape2?.draw();

const shape3 = ShapeFactory.getShape("triangle");
if (!shape3) console.log("Unknown shape requested");
