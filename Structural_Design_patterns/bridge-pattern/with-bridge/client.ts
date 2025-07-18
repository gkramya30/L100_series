import { EmailChannel } from "./channels/EmailChannel";
import { SMSChannel } from "./channels/SMSChannel";
import { UrgentNotification } from "./notifications/UrgentNotification";
import { PromotionalNotification } from "./notifications/PromotionalNotification";

const email = new EmailChannel();
const sms = new SMSChannel();

const urgentViaEmail = new UrgentNotification(email);
urgentViaEmail.notify("Server is down!");

const promoViaSMS = new PromotionalNotification(sms);
promoViaSMS.notify("Buy 1 Get 1 Free Offer!");
