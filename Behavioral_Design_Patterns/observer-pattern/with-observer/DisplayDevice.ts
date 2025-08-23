import { Observer } from "./Observer";

export class MobileApp implements Observer {
    update(temp: number): void {
        console.log(`MobileApp: updated temperature to ${temp}°C`);
    }
}

export class SmartWatch implements Observer {
    update(temp: number): void {
        console.log(`SmartWatch: updated temperature to ${temp}°C`);
    }
}
