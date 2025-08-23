import { WeatherStation } from "./WeatherStation";
import { MobileApp, SmartWatch } from "./DisplayDevice";

const station = new WeatherStation();

const app = new MobileApp();
const watch = new SmartWatch();

station.addObserver(app);
station.addObserver(watch);

station.setTemperature(25);
station.setTemperature(30);
