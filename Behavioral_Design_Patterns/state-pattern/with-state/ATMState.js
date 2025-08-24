"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthenticatedState = exports.HasCardState = exports.NoCardState = void 0;
var NoCardState = /** @class */ (function () {
    function NoCardState(atm) {
        this.atm = atm;
    }
    NoCardState.prototype.insertCard = function () {
        console.log("Card inserted.");
        this.atm.setState(this.atm.hasCardState);
    };
    NoCardState.prototype.ejectCard = function () {
        console.log("No card to eject.");
    };
    NoCardState.prototype.enterPin = function () {
        console.log("Insert a card first.");
    };
    NoCardState.prototype.withdrawCash = function () {
        console.log("Insert a card first.");
    };
    return NoCardState;
}());
exports.NoCardState = NoCardState;
var HasCardState = /** @class */ (function () {
    function HasCardState(atm) {
        this.atm = atm;
    }
    HasCardState.prototype.insertCard = function () {
        console.log("Card already inserted.");
    };
    HasCardState.prototype.ejectCard = function () {
        console.log("Card ejected.");
        this.atm.setState(this.atm.noCardState);
    };
    HasCardState.prototype.enterPin = function (pin) {
        if (pin === 1234) {
            console.log("PIN accepted.");
            this.atm.setState(this.atm.authenticatedState);
        }
        else {
            console.log("Wrong PIN. Card ejected.");
            this.atm.setState(this.atm.noCardState);
        }
    };
    HasCardState.prototype.withdrawCash = function () {
        console.log("Enter PIN first.");
    };
    return HasCardState;
}());
exports.HasCardState = HasCardState;
var AuthenticatedState = /** @class */ (function () {
    function AuthenticatedState(atm) {
        this.atm = atm;
    }
    AuthenticatedState.prototype.insertCard = function () {
        console.log("Transaction in progress. Card already inserted.");
    };
    AuthenticatedState.prototype.ejectCard = function () {
        console.log("Card ejected.");
        this.atm.setState(this.atm.noCardState);
    };
    AuthenticatedState.prototype.enterPin = function () {
        console.log("Already authenticated.");
    };
    AuthenticatedState.prototype.withdrawCash = function (amount) {
        console.log("Withdrew $".concat(amount, "."));
        this.atm.setState(this.atm.noCardState);
    };
    return AuthenticatedState;
}());
exports.AuthenticatedState = AuthenticatedState;
