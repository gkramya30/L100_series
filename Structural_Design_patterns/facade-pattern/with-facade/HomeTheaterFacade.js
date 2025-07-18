"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HomeTheaterFacade = void 0;
class HomeTheaterFacade {
    constructor(audio, projector, screen, player) {
        this.audio = audio;
        this.projector = projector;
        this.screen = screen;
        this.player = player;
    }
    watchMovie(movie) {
        console.log("\n=== Starting Movie Experience ===");
        this.screen.lower();
        this.projector.turnOn();
        this.projector.setMode("Cinema");
        this.audio.turnOn();
        this.audio.setVolume(7);
        this.player.play(movie);
    }
    endMovie() {
        console.log("\n=== Ending Movie Experience ===");
        this.player.stop();
        this.screen.raise();
    }
}
exports.HomeTheaterFacade = HomeTheaterFacade;
