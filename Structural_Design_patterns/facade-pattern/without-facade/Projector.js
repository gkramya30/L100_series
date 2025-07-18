"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Projector = void 0;
class Projector {
    turnOn() {
        console.log("Projector is now ON.");
    }
    turnOff() {
        console.log("Projector is now OFF.");
    }
    setMode(mode) {
        console.log(`Projector set to ${mode} mode.`);
    }
}
exports.Projector = Projector;
