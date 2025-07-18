import { AudioSystem } from "./AudioSystem";
import { Projector } from "./Projector"; 
import { Screen } from "./Screen";
import { MoviePlayer } from "./MoviePlayer";

const audio = new AudioSystem();
const projector = new Projector();
const screen = new Screen();
const player = new MoviePlayer();

console.log("\n=== Starting Movie Experience ===");
screen.lower();
projector.turnOn();
projector.setMode("Cinema");
audio.turnOn();
audio.setVolume(7);
player.play("Inception");

console.log("\n=== Ending Movie Experience ===");
player.stop();
screen.raise();
