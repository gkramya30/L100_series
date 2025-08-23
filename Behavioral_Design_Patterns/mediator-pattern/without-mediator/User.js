"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
var User = /** @class */ (function () {
    function User(name) {
        this.name = name;
        this.contacts = new Map();
    }
    User.prototype.addContact = function (user) {
        this.contacts.set(user.name, user);
    };
    User.prototype.send = function (receiverName, message) {
        var receiver = this.contacts.get(receiverName);
        if (receiver) {
            receiver.receive(this.name, message);
        }
    };
    User.prototype.receive = function (sender, message) {
        console.log("".concat(this.name, " received a message from ").concat(sender, ": ").concat(message));
    };
    return User;
}());
exports.User = User;
