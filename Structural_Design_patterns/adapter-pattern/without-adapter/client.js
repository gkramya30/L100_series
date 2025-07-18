"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const PayPal_1 = require("./PayPal");
const Stripe_1 = require("./Stripe");
const paypal = new PayPal_1.PayPal();
paypal.pay(1500);
const stripe = new Stripe_1.Stripe();
stripe.makePayment(2200); // Client has to know Stripe's API
