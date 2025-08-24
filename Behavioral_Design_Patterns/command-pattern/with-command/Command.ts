import { Light, Fan } from "./Devices";

export interface Command {
  execute(): void;
  undo(): void;
}

export class LightOnCommand implements Command {
  constructor(private light: Light) {}

  execute() {
    this.light.on();
  }

  undo() {
    this.light.off();
  }
}

export class LightOffCommand implements Command {
  constructor(private light: Light) {}

  execute() {
    this.light.off();
  }

  undo() {
    this.light.on();
  }
}

export class FanOnCommand implements Command {
  constructor(private fan: Fan) {}

  execute() {
    this.fan.on();
  }

  undo() {
    this.fan.off();
  }
}

export class FanOffCommand implements Command {
  constructor(private fan: Fan) {}

  execute() {
    this.fan.off();
  }

  undo() {
    this.fan.on();
  }
}
