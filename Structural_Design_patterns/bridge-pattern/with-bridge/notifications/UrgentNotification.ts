import { Notification } from "./Notification";

export class UrgentNotification extends Notification {
  notify(message: string): void {
    this.channel.send(`🚨 URGENT: ${message}`);
  }
}
