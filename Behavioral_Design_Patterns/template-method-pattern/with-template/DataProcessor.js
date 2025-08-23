"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataProcessor = void 0;
var DataProcessor = /** @class */ (function () {
    function DataProcessor() {
    }
    DataProcessor.prototype.process = function () {
        this.loadFile();
        var data = this.parseFile();
        var transformed = this.transformData(data);
        this.saveResults(transformed);
    };
    return DataProcessor;
}());
exports.DataProcessor = DataProcessor;
