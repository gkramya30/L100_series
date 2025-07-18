"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const EmailUrgent_1 = require("./EmailUrgent");
const SMSPromotional_1 = require("./SMSPromotional");
const emailUrgent = new EmailUrgent_1.EmailUrgent();
emailUrgent.notify("Payment system failure!");
const smsPromo = new SMSPromotional_1.SMSPromotional();
smsPromo.notify("20% OFF Sale Today!");
