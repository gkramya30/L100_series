import { IInternet } from "./IInternet";
import { RealInternet } from "./RealInternet";

export class InternetProxy implements IInternet {
    private realInternet = new RealInternet();
    private bannedSites: string[] = ["social.com", "games.com", "movies.com"];
    private isAdmin: boolean;

    constructor(userRole: string) {
        this.isAdmin = userRole.toLowerCase() === "admin";
    }

    connectTo(site: string): void {
        if (!this.isAdmin && this.bannedSites.includes(site)) {
            console.log(`Access Denied to ${site}`);
        } else {
            this.realInternet.connectTo(site);
        }
    }
}
