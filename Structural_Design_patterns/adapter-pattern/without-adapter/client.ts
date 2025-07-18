import { PayPal } from "./PayPal";
import { Stripe } from "./Stripe";

const paypal = new PayPal();
paypal.pay(1500);

const stripe = new Stripe();
stripe.makePayment(2200);  // Client has to know Stripe's API
