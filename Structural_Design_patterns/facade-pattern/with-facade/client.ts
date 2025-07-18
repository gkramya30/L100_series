import { AudioSystem } from "./AudioSystem";
import { Projector } from "./Projector";
import { Screen } from "./Screen";
import { MoviePlayer } from "./MoviePlayer";
import { HomeTheaterFacade } from "./HomeTheaterFacade";

const audio = new AudioSystem();
const projector = new Projector();
const screen = new Screen();
const player = new MoviePlayer();

const homeTheater = new HomeTheaterFacade(audio, projector, screen, player);

homeTheater.watchMovie("Inception");
homeTheater.endMovie();
