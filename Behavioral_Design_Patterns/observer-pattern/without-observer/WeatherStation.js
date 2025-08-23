"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WeatherStation = void 0;
var WeatherStation = /** @class */ (function () {
    function WeatherStation() {
        this.temperature = 0;
    }
    WeatherStation.prototype.setTemperature = function (temp) {
        this.temperature = temp;
        console.log("WeatherStation: new temperature is ".concat(temp, "\u00B0C"));
        this.updateMobileApp();
        this.updateSmartWatch();
    };
    WeatherStation.prototype.updateMobileApp = function () {
        console.log("MobileApp: updated temperature to ".concat(this.temperature, "\u00B0C"));
    };
    WeatherStation.prototype.updateSmartWatch = function () {
        console.log("SmartWatch: updated temperature to ".concat(this.temperature, "\u00B0C"));
    };
    return WeatherStation;
}());
exports.WeatherStation = WeatherStation;
