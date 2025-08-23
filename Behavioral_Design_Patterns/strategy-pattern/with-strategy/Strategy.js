"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CyclingStrategy = exports.WalkingStrategy = exports.DrivingStrategy = void 0;
var DrivingStrategy = /** @class */ (function () {
    function DrivingStrategy() {
    }
    DrivingStrategy.prototype.calculateRoute = function (start, end) {
        console.log("Driving from ".concat(start, " to ").concat(end, " via highways."));
    };
    return DrivingStrategy;
}());
exports.DrivingStrategy = DrivingStrategy;
var WalkingStrategy = /** @class */ (function () {
    function WalkingStrategy() {
    }
    WalkingStrategy.prototype.calculateRoute = function (start, end) {
        console.log("Walking from ".concat(start, " to ").concat(end, " through pedestrian paths."));
    };
    return WalkingStrategy;
}());
exports.WalkingStrategy = WalkingStrategy;
var CyclingStrategy = /** @class */ (function () {
    function CyclingStrategy() {
    }
    CyclingStrategy.prototype.calculateRoute = function (start, end) {
        console.log("Cycling from ".concat(start, " to ").concat(end, " via bike lanes."));
    };
    return CyclingStrategy;
}());
exports.CyclingStrategy = CyclingStrategy;
