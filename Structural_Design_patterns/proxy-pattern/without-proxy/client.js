"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const RealInternet_1 = require("./RealInternet");
const internet = new RealInternet_1.RealInternet();
console.log("Any user can access any site:");
internet.connectTo("learn.com");
internet.connectTo("social.com");
internet.connectTo("games.com");
