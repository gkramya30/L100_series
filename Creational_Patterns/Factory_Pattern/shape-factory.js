// shape-factory-pattern.ts
var Circle = /** @class */ (function () {
    function Circle() {
    }
    Circle.prototype.draw = function () {
        console.log("Drawing a Circle");
    };
    return Circle;
}());
var Square = /** @class */ (function () {
    function Square() {
    }
    Square.prototype.draw = function () {
        console.log("Drawing a Square");
    };
    return Square;
}());
var ShapeFactory = /** @class */ (function () {
    function ShapeFactory() {
    }
    ShapeFactory.getShape = function (shapeType) {
        if (shapeType === "circle") {
            return new Circle();
        }
        else if (shapeType === "square") {
            return new Square();
        }
        else {
            return null;
        }
    };
    return ShapeFactory;
}());
// Client uses factory to get objects
var shape1 = ShapeFactory.getShape("circle");
shape1 === null || shape1 === void 0 ? void 0 : shape1.draw();
var shape2 = ShapeFactory.getShape("square");
shape2 === null || shape2 === void 0 ? void 0 : shape2.draw();
var shape3 = ShapeFactory.getShape("triangle");
if (!shape3)
    console.log("Unknown shape requested");
