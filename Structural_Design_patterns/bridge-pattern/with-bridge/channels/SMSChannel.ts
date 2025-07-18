import { NotificationChannel } from "./NotificationChannel";

export class SMSChannel implements NotificationChannel {
  send(message: string): void {
    console.log(`[SMS] ${message}`);
  }
}
