import { RouteStrategy } from "./Strategy";

export class Navigator {
    private strategy: RouteStrategy;

    constructor(strategy: RouteStrategy) {
        this.strategy = strategy;
    }

    setStrategy(strategy: RouteStrategy) {
        this.strategy = strategy;
    }

    navigate(start: string, end: string) {
        this.strategy.calculateRoute(start, end);
    }
}
