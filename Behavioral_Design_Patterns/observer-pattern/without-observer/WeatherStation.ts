export class WeatherStation {
    private temperature: number = 0;

    setTemperature(temp: number) {
        this.temperature = temp;
        console.log(`WeatherStation: new temperature is ${temp}°C`);
        this.updateMobileApp();
        this.updateSmartWatch();
    }

    private updateMobileApp() {
        console.log(`MobileApp: updated temperature to ${this.temperature}°C`);
    }

    private updateSmartWatch() {
        console.log(`SmartWatch: updated temperature to ${this.temperature}°C`);
    }
}
