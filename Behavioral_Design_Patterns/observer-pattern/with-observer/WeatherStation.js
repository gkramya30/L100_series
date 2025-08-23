"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WeatherStation = void 0;
var WeatherStation = /** @class */ (function () {
    function WeatherStation() {
        this.observers = [];
        this.temperature = 0;
    }
    WeatherStation.prototype.addObserver = function (observer) {
        this.observers.push(observer);
    };
    WeatherStation.prototype.removeObserver = function (observer) {
        this.observers = this.observers.filter(function (obs) { return obs !== observer; });
    };
    WeatherStation.prototype.setTemperature = function (temp) {
        console.log("WeatherStation: new temperature is ".concat(temp, "\u00B0C"));
        this.temperature = temp;
        this.notifyObservers();
    };
    WeatherStation.prototype.notifyObservers = function () {
        for (var _i = 0, _a = this.observers; _i < _a.length; _i++) {
            var observer = _a[_i];
            observer.update(this.temperature);
        }
    };
    return WeatherStation;
}());
exports.WeatherStation = WeatherStation;
