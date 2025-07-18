import { EmailUrgent } from "./EmailUrgent";
import { SMSPromotional } from "./SMSPromotional";

const emailUrgent = new EmailUrgent();
emailUrgent.notify("Payment system failure!");

const smsPromo = new SMSPromotional();
smsPromo.notify("20% OFF Sale Today!");
