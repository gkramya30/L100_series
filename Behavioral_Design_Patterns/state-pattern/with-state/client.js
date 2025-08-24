"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ATMContext_1 = require("./ATMContext");
var atm = new ATMContext_1.ATMContext();
atm.insertCard(); // Card inserted.
atm.enterPin(1234); // PIN accepted.
atm.withdrawCash(100); // Withdrew $100.
atm.insertCard(); // Card inserted.
atm.enterPin(1111); // Wrong PIN. Card ejected.
atm.withdrawCash(50); // Insert a card first.
