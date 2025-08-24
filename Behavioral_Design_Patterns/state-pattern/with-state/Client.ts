import { ATMContext } from "./ATMContext";

const atm = new ATMContext();

atm.insertCard();        // Card inserted.
atm.enterPin(1234);      // PIN accepted.
atm.withdrawCash(100);   // Withdrew $100.
atm.insertCard();        // Card inserted.
atm.enterPin(1111);      // Wrong PIN. Card ejected.
atm.withdrawCash(50);    // Insert a card first.
