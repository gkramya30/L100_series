export class Projector {
  turnOn() {
    console.log("Projector is now ON.");
  }

  turnOff() {
    console.log("Projector is now OFF.");
  }

  setMode(mode: string) {
    console.log(`Projector set to ${mode} mode.`);
  }
}