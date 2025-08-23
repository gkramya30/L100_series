"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.CsvProcessor = void 0;
var DataProcessor_1 = require("./DataProcessor");
var CsvProcessor = /** @class */ (function (_super) {
    __extends(CsvProcessor, _super);
    function CsvProcessor() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CsvProcessor.prototype.loadFile = function () {
        console.log("Loading CSV file...");
    };
    CsvProcessor.prototype.parseFile = function () {
        console.log("Parsing CSV...");
        return ["John,30", "Jane,25"];
    };
    CsvProcessor.prototype.transformData = function (data) {
        console.log("Transforming CSV...");
        return data.map(function (row) {
            var _a = row.split(","), name = _a[0], age = _a[1];
            return { name: name, age: Number(age) };
        });
    };
    CsvProcessor.prototype.saveResults = function (data) {
        console.log("Saving CSV results:", data);
    };
    return CsvProcessor;
}(DataProcessor_1.DataProcessor));
exports.CsvProcessor = CsvProcessor;
