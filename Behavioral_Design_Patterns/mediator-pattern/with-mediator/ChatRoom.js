"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChatRoom = exports.User = void 0;
var User = /** @class */ (function () {
    function User(name) {
        this.name = name;
    }
    User.prototype.setChatRoom = function (chatRoom) {
        this.chatRoom = chatRoom;
    };
    User.prototype.send = function (receiverName, message) {
        if (this.chatRoom) {
            this.chatRoom.sendMessage(this, receiverName, message);
        }
    };
    User.prototype.receive = function (sender, message) {
        console.log("".concat(this.name, " received a message from ").concat(sender, ": ").concat(message));
    };
    return User;
}());
exports.User = User;
var ChatRoom = /** @class */ (function () {
    function ChatRoom() {
        this.users = new Map();
    }
    ChatRoom.prototype.registerUser = function (user) {
        this.users.set(user.name, user);
        user.setChatRoom(this);
    };
    ChatRoom.prototype.sendMessage = function (sender, receiverName, message) {
        var receiver = this.users.get(receiverName);
        if (receiver) {
            receiver.receive(sender.name, message);
        }
    };
    return ChatRoom;
}());
exports.ChatRoom = ChatRoom;
