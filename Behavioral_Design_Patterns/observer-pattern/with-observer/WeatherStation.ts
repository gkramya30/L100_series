import { Observer } from "./Observer";

export class WeatherStation {
    private observers: Observer[] = [];
    private temperature: number = 0;

    addObserver(observer: Observer) {
        this.observers.push(observer);
    }

    removeObserver(observer: Observer) {
        this.observers = this.observers.filter(obs => obs !== observer);
    }

    setTemperature(temp: number) {
        console.log(`WeatherStation: new temperature is ${temp}°C`);
        this.temperature = temp;
        this.notifyObservers();
    }

    private notifyObservers() {
        for (const observer of this.observers) {
            observer.update(this.temperature);
        }
    }
}
