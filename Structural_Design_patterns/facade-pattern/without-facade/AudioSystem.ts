export class AudioSystem {
    turnOn(): void {
        console.log("Audio system turned on.");
    }

    setVolume(level: number): void {
        console.log(`Volume set to ${level}.`);
    }
}
