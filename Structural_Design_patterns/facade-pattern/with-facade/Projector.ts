export class Projector {
    turnOn(): void {
        console.log("Projector turned on.");
    }

    setMode(mode: string): void {
        console.log(`Projector set to ${mode} mode.`);
    }
}
