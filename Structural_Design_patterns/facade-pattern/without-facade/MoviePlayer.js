"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MoviePlayer = void 0;
class MoviePlayer {
    play(movie) {
        console.log(`Playing movie: ${movie}`);
    }
    stop() {
        console.log("Movie stopped.");
    }
}
exports.MoviePlayer = MoviePlayer;
