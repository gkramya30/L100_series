"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InternetProxy = void 0;
const RealInternet_1 = require("./RealInternet");
class InternetProxy {
    constructor(userRole) {
        this.realInternet = new RealInternet_1.RealInternet();
        this.bannedSites = ["social.com", "games.com", "movies.com"];
        this.isAdmin = userRole.toLowerCase() === "admin";
    }
    connectTo(site) {
        if (!this.isAdmin && this.bannedSites.includes(site)) {
            console.log(`Access Denied to ${site}`);
        }
        else {
            this.realInternet.connectTo(site);
        }
    }
}
exports.InternetProxy = InternetProxy;
