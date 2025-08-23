"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Navigator = void 0;
var Navigator = /** @class */ (function () {
    function Navigator() {
    }
    Navigator.prototype.navigate = function (mode, start, end) {
        if (mode === "driving") {
            console.log("Driving from ".concat(start, " to ").concat(end, " via highways."));
        }
        else if (mode === "walking") {
            console.log("Walking from ".concat(start, " to ").concat(end, " through pedestrian paths."));
        }
        else if (mode === "cycling") {
            console.log("Cycling from ".concat(start, " to ").concat(end, " via bike lanes."));
        }
        else {
            console.log("Invalid mode of transportation.");
        }
    };
    return Navigator;
}());
exports.Navigator = Navigator;
