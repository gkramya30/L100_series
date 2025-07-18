import { IInternet } from "./IInternet";

export class RealInternet implements IInternet {
    connectTo(site: string): void {
        console.log(`Connecting to ${site}...`);
    }
}
