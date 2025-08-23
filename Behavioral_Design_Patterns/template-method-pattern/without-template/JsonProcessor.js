"use strict";
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
var JsonProcessor = /** @class */ (function () {
    function JsonProcessor() {
    }
    JsonProcessor.prototype.process = function () {
        console.log("Loading JSON file...");
        console.log("Parsing JSON...");
        var data = [{ name: "Alice", age: 22 }, { name: "Bob", age: 35 }];
        console.log("Transforming JSON...");
        var transformed = data.map(function (d) { return (__assign(__assign({}, d), { age: d.age + 1 })); });
        console.log("Saving JSON results:", transformed);
    };
    return JsonProcessor;
}());
exports.JsonProcessor = JsonProcessor;
