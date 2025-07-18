import { RealInternet } from "./RealInternet";

const internet = new RealInternet();

console.log("Any user can access any site:");
internet.connectTo("learn.com");
internet.connectTo("social.com");
internet.connectTo("games.com");
