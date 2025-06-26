// without-builder.ts
var Laptop = /** @class */ (function () {
    function Laptop(brand, ram, storage) {
        this.brand = brand;
        this.ram = ram;
        this.storage = storage;
    }
    Laptop.prototype.specs = function () {
        var _a, _b;
        console.log("Brand: ".concat(this.brand, ", RAM: ").concat((_a = this.ram) !== null && _a !== void 0 ? _a : "N/A", ", Storage: ").concat((_b = this.storage) !== null && _b !== void 0 ? _b : "N/A"));
    };
    return Laptop;
}());
var laptop1 = new Laptop("Dell");
var laptop2 = new Laptop("HP", "16GB", "512GB");
laptop1.specs();
laptop2.specs();
