// shape-without-factory.ts
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
// Client manually creates instances
var circle = new Circle();
var square = new Square();
circle.draw();
square.draw();
