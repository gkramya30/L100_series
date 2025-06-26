// builder-pattern.ts
var Laptop = /** @class */ (function () {
    function Laptop(builder) {
        this.brand = builder.brand;
        this.ram = builder.ram;
        this.storage = builder.storage;
    }
    Laptop.prototype.specs = function () {
        var _a, _b;
        console.log("Brand: ".concat(this.brand, ", RAM: ").concat((_a = this.ram) !== null && _a !== void 0 ? _a : "N/A", ", Storage: ").concat((_b = this.storage) !== null && _b !== void 0 ? _b : "N/A"));
    };
    return Laptop;
}());
var LaptopBuilder = /** @class */ (function () {
    function LaptopBuilder(brand) {
        this.brand = brand;
    }
    LaptopBuilder.prototype.setRAM = function (ram) {
        this.ram = ram;
        return this;
    };
    LaptopBuilder.prototype.setStorage = function (storage) {
        this.storage = storage;
        return this;
    };
    LaptopBuilder.prototype.build = function () {
        return new Laptop(this);
    };
    return LaptopBuilder;
}());
var laptop1 = new LaptopBuilder("Lenovo").build();
var laptop2 = new LaptopBuilder("Acer").setRAM("8GB").setStorage("1TB").build();
laptop1.specs();
laptop2.specs();
