"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UrgentNotification = void 0;
const Notification_1 = require("./Notification");
class UrgentNotification extends Notification_1.Notification {
    notify(message) {
        this.channel.send(`🚨 URGENT: ${message}`);
    }
}
exports.UrgentNotification = UrgentNotification;
