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
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.JsonProcessor = void 0;
var DataProcessor_1 = require("./DataProcessor");
var JsonProcessor = /** @class */ (function (_super) {
    __extends(JsonProcessor, _super);
    function JsonProcessor() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    JsonProcessor.prototype.loadFile = function () {
        console.log("Loading JSON file...");
    };
    JsonProcessor.prototype.parseFile = function () {
        console.log("Parsing JSON...");
        return [{ name: "Alice", age: 22 }, { name: "Bob", age: 35 }];
    };
    JsonProcessor.prototype.transformData = function (data) {
        console.log("Transforming JSON...");
        return data.map(function (d) { return (__assign(__assign({}, d), { age: d.age + 1 })); });
    };
    JsonProcessor.prototype.saveResults = function (data) {
        console.log("Saving JSON results:", data);
    };
    return JsonProcessor;
}(DataProcessor_1.DataProcessor));
exports.JsonProcessor = JsonProcessor;
