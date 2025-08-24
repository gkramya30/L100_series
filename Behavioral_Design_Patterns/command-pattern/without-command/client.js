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
var RemoteControl = /** @class */ (function () {
    function RemoteControl() {
    }
    RemoteControl.prototype.pressLightOn = function (light) {
        light.on();
    };
    RemoteControl.prototype.pressLightOff = function (light) {
        light.off();
    };
    RemoteControl.prototype.pressFanOn = function (fan) {
        fan.on();
    };
    RemoteControl.prototype.pressFanOff = function (fan) {
        fan.off();
    };
    return RemoteControl;
}());
// Test
var light = new Light();
var fan = new Fan();
var remote = new RemoteControl();
remote.pressLightOn(light); // Light is ON
remote.pressFanOn(fan); // Fan is ON
remote.pressFanOff(fan); // Fan is OFF
remote.pressLightOff(light); // Light is OFF
