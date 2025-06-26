var Car = /** @class */ (function () {
    function Car(brand, color) {
        this.brand = brand;
        this.color = color;
    }
    Car.prototype.show = function () {
        console.log("Car: ".concat(this.brand, ", Color: ").concat(this.color));
    };
    return Car;
}());
var car1 = new Car("Toyota", "Red");
// Manual copy
var car2 = new Car(car1.brand, car1.color);
car1.show();
car2.show();
