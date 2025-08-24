"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Fan = exports.Light = void 0;
var Light = /** @class */ (function () {
    function Light() {
    }
    Light.prototype.on = function () {
        console.log("Light is ON");
    };
    Light.prototype.off = function () {
        console.log("Light is OFF");
    };
    return Light;
}());
exports.Light = Light;
var Fan = /** @class */ (function () {
    function Fan() {
    }
    Fan.prototype.on = function () {
        console.log("Fan is ON");
    };
    Fan.prototype.off = function () {
        console.log("Fan is OFF");
    };
    return Fan;
}());
exports.Fan = Fan;
