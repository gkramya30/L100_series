"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RemoteControl = void 0;
var RemoteControl = /** @class */ (function () {
    function RemoteControl() {
        this.history = [];
    }
    RemoteControl.prototype.pressButton = function (command) {
        command.execute();
        this.history.push(command);
    };
    RemoteControl.prototype.pressUndo = function () {
        var lastCommand = this.history.pop();
        if (lastCommand) {
            lastCommand.undo();
        }
    };
    return RemoteControl;
}());
exports.RemoteControl = RemoteControl;
