"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AudioSystem = void 0;
class AudioSystem {
    turnOn() {
        console.log("Audio system turned on.");
    }
    setVolume(level) {
        console.log(`Volume set to ${level}.`);
    }
}
exports.AudioSystem = AudioSystem;
