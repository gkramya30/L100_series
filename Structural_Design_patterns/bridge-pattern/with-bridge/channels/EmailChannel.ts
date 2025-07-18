import { NotificationChannel } from "./NotificationChannel";

export class EmailChannel implements NotificationChannel {
  send(message: string): void {
    console.log(`[Email] ${message}`);
  }
}
