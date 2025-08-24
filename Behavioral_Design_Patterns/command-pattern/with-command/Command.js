"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FanOffCommand = exports.FanOnCommand = exports.LightOffCommand = exports.LightOnCommand = void 0;
var LightOnCommand = /** @class */ (function () {
    function LightOnCommand(light) {
        this.light = light;
    }
    LightOnCommand.prototype.execute = function () {
        this.light.on();
    };
    LightOnCommand.prototype.undo = function () {
        this.light.off();
    };
    return LightOnCommand;
}());
exports.LightOnCommand = LightOnCommand;
var LightOffCommand = /** @class */ (function () {
    function LightOffCommand(light) {
        this.light = light;
    }
    LightOffCommand.prototype.execute = function () {
        this.light.off();
    };
    LightOffCommand.prototype.undo = function () {
        this.light.on();
    };
    return LightOffCommand;
}());
exports.LightOffCommand = LightOffCommand;
var FanOnCommand = /** @class */ (function () {
    function FanOnCommand(fan) {
        this.fan = fan;
    }
    FanOnCommand.prototype.execute = function () {
        this.fan.on();
    };
    FanOnCommand.prototype.undo = function () {
        this.fan.off();
    };
    return FanOnCommand;
}());
exports.FanOnCommand = FanOnCommand;
var FanOffCommand = /** @class */ (function () {
    function FanOffCommand(fan) {
        this.fan = fan;
    }
    FanOffCommand.prototype.execute = function () {
        this.fan.off();
    };
    FanOffCommand.prototype.undo = function () {
        this.fan.on();
    };
    return FanOffCommand;
}());
exports.FanOffCommand = FanOffCommand;
