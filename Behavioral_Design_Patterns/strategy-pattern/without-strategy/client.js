"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Navigator_1 = require("./Navigator");
var navigator = new Navigator_1.Navigator();
navigator.navigate("driving", "Home", "Work");
navigator.navigate("walking", "Home", "Park");
navigator.navigate("cycling", "Home", "Gym");
