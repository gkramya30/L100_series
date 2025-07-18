import { AudioSystem } from "./AudioSystem";
import { Projector } from "./Projector";
import { Screen } from "./Screen";
import { MoviePlayer } from "./MoviePlayer";

export class HomeTheaterFacade {
    constructor(
        private audio: AudioSystem,
        private projector: Projector,
        private screen: Screen,
        private player: MoviePlayer
    ) {}

    watchMovie(movie: string): void {
        console.log("\n=== Starting Movie Experience ===");
        this.screen.lower();
        this.projector.turnOn();
        this.projector.setMode("Cinema");
        this.audio.turnOn();
        this.audio.setVolume(7);
        this.player.play(movie);
    }

    endMovie(): void {
        console.log("\n=== Ending Movie Experience ===");
        this.player.stop();
        this.screen.raise();
    }
}
