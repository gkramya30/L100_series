import { Navigator } from "./Navigator";
import { DrivingStrategy, WalkingStrategy, CyclingStrategy } from "./Strategy";

const navigator = new Navigator(new DrivingStrategy());
navigator.navigate("Home", "Work");

navigator.setStrategy(new WalkingStrategy());
navigator.navigate("Home", "Park");

navigator.setStrategy(new CyclingStrategy());
navigator.navigate("Home", "Gym");
