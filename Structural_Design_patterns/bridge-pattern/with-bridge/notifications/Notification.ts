import { NotificationChannel } from "../channels/NotificationChannel";

export abstract class Notification {
  constructor(protected channel: NotificationChannel) {}

  abstract notify(message: string): void;
}
