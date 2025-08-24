"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Devices_1 = require("./Devices");
var Command_1 = require("./Command");
var RemoteControl_1 = require("./RemoteControl");
var light = new Devices_1.Light();
var fan = new Devices_1.Fan();
var lightOn = new Command_1.LightOnCommand(light);
var lightOff = new Command_1.LightOffCommand(light);
var fanOn = new Command_1.FanOnCommand(fan);
var fanOff = new Command_1.FanOffCommand(fan);
var remote = new RemoteControl_1.RemoteControl();
remote.pressButton(lightOn); // Light is ON
remote.pressButton(fanOn); // Fan is ON
remote.pressUndo(); // Fan is OFF
remote.pressButton(lightOff); // Light is OFF
remote.pressUndo(); // Light is ON
