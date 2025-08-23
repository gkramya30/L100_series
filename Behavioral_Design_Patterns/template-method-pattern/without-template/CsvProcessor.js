"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CsvProcessor = void 0;
var CsvProcessor = /** @class */ (function () {
    function CsvProcessor() {
    }
    CsvProcessor.prototype.process = function () {
        console.log("Loading CSV file...");
        console.log("Parsing CSV...");
        var data = ["John,30", "Jane,25"];
        console.log("Transforming CSV...");
        var transformed = data.map(function (row) {
            var _a = row.split(","), name = _a[0], age = _a[1];
            return { name: name, age: Number(age) };
        });
        console.log("Saving CSV results:", transformed);
    };
    return CsvProcessor;
}());
exports.CsvProcessor = CsvProcessor;
