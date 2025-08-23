export interface RouteStrategy {
    calculateRoute(start: string, end: string): void;
}

export class DrivingStrategy implements RouteStrategy {
    calculateRoute(start: string, end: string): void {
        console.log(`Driving from ${start} to ${end} via highways.`);
    }
}

export class WalkingStrategy implements RouteStrategy {
    calculateRoute(start: string, end: string): void {
        console.log(`Walking from ${start} to ${end} through pedestrian paths.`);
    }
}

export class CyclingStrategy implements RouteStrategy {
    calculateRoute(start: string, end: string): void {
        console.log(`Cycling from ${start} to ${end} via bike lanes.`);
    }
}
