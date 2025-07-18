export class MoviePlayer {
    play(movie: string): void {
        console.log(`Playing movie: ${movie}`);
    }

    stop(): void {
        console.log("Movie stopped.");
    }
}
