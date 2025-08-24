class Light {
  on() {
    console.log("Light is ON");
  }

  off() {
    console.log("Light is OFF");
  }
}

class Fan {
  on() {
    console.log("Fan is ON");
  }

  off() {
    console.log("Fan is OFF");
  }
}

class RemoteControl {
  pressLightOn(light: Light) {
    light.on();
  }

  pressLightOff(light: Light) {
    light.off();
  }

  pressFanOn(fan: Fan) {
    fan.on();
  }

  pressFanOff(fan: Fan) {
    fan.off();
  }
}

// Test
const light = new Light();
const fan = new Fan();
const remote = new RemoteControl();

remote.pressLightOn(light);  // Light is ON
remote.pressFanOn(fan);      // Fan is ON
remote.pressFanOff(fan);     // Fan is OFF
remote.pressLightOff(light); // Light is OFF
