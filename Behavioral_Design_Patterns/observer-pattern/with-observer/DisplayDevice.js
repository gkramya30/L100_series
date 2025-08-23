"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SmartWatch = exports.MobileApp = void 0;
var MobileApp = /** @class */ (function () {
    function MobileApp() {
    }
    MobileApp.prototype.update = function (temp) {
        console.log("MobileApp: updated temperature to ".concat(temp, "\u00B0C"));
    };
    return MobileApp;
}());
exports.MobileApp = MobileApp;
var SmartWatch = /** @class */ (function () {
    function SmartWatch() {
    }
    SmartWatch.prototype.update = function (temp) {
        console.log("SmartWatch: updated temperature to ".concat(temp, "\u00B0C"));
    };
    return SmartWatch;
}());
exports.SmartWatch = SmartWatch;
