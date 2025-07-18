"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PromotionalNotification = void 0;
const Notification_1 = require("./Notification");
class PromotionalNotification extends Notification_1.Notification {
    notify(message) {
        this.channel.send(`🎉 Promo: ${message}`);
    }
}
exports.PromotionalNotification = PromotionalNotification;
