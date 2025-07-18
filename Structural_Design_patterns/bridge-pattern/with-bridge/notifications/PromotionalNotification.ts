import { Notification } from "./Notification";

export class PromotionalNotification extends Notification {
  notify(message: string): void {
    this.channel.send(`🎉 Promo: ${message}`);
  }
}
