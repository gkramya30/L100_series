"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ATMContext = void 0;
var ATMState_1 = require("./ATMState");
var ATMContext = /** @class */ (function () {
    function ATMContext() {
        this.noCardState = new ATMState_1.NoCardState(this);
        this.hasCardState = new ATMState_1.HasCardState(this);
        this.authenticatedState = new ATMState_1.AuthenticatedState(this);
        this.currentState = this.noCardState;
    }
    ATMContext.prototype.setState = function (state) {
        this.currentState = state;
    };
    ATMContext.prototype.insertCard = function () {
        this.currentState.insertCard();
    };
    ATMContext.prototype.ejectCard = function () {
        this.currentState.ejectCard();
    };
    ATMContext.prototype.enterPin = function (pin) {
        this.currentState.enterPin(pin);
    };
    ATMContext.prototype.withdrawCash = function (amount) {
        this.currentState.withdrawCash(amount);
    };
    return ATMContext;
}());
exports.ATMContext = ATMContext;
