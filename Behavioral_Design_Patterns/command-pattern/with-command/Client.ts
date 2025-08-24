import { Light, Fan } from "./Devices";
import {
  LightOnCommand,
  LightOffCommand,
  FanOnCommand,
  FanOffCommand,
} from "./Command";
import { RemoteControl } from "./RemoteControl";

const light = new Light();
const fan = new Fan();

const lightOn = new LightOnCommand(light);
const lightOff = new LightOffCommand(light);
const fanOn = new FanOnCommand(fan);
const fanOff = new FanOffCommand(fan);

const remote = new RemoteControl();

remote.pressButton(lightOn);   // Light is ON
remote.pressButton(fanOn);     // Fan is ON
remote.pressUndo();            // Fan is OFF
remote.pressButton(lightOff);  // Light is OFF
remote.pressUndo();            // Light is ON
