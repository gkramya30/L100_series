"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CsvProcessor_1 = require("./CsvProcessor");
var JsonProcessor_1 = require("./JsonProcessor");
var csv = new CsvProcessor_1.CsvProcessor();
csv.process();
console.log("---");
var json = new JsonProcessor_1.JsonProcessor();
json.process();
