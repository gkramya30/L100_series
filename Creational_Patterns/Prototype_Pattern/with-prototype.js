var Car = /** @class */ (function () {
    function Car(brand, color) {
        this.brand = brand;
        this.color = color;
    }
    Car.prototype.clone = function () {
        return new Car(this.brand, this.color);
    };
    Car.prototype.show = function () {
        console.log("Car: ".concat(this.brand, ", Color: ").concat(this.color));
    };
    return Car;
}());
var car1 = new Car("Honda", "Blue");
var car2 = car1.clone(); // cloned!
car1.show();
car2.show();
