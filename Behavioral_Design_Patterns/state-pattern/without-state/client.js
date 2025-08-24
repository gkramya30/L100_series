var ATM = /** @class */ (function () {
    function ATM() {
        this.state = "NoCard";
    }
    ATM.prototype.insertCard = function () {
        if (this.state === "NoCard") {
            console.log("Card inserted.");
            this.state = "HasCard";
        }
        else {
            console.log("Card already inserted or invalid state.");
        }
    };
    ATM.prototype.ejectCard = function () {
        if (this.state === "HasCard" || this.state === "Authenticated") {
            console.log("Card ejected.");
            this.state = "NoCard";
        }
        else {
            console.log("No card to eject.");
        }
    };
    ATM.prototype.enterPin = function (pin) {
        if (this.state === "HasCard") {
            if (pin === 1234) {
                console.log("PIN accepted.");
                this.state = "Authenticated";
            }
            else {
                console.log("Wrong PIN. Card ejected.");
                this.state = "NoCard";
            }
        }
        else {
            console.log("Insert card first.");
        }
    };
    ATM.prototype.withdrawCash = function (amount) {
        if (this.state === "Authenticated") {
            console.log("Withdrew $".concat(amount, "."));
            this.state = "NoCard";
        }
        else {
            console.log("You must insert a card and enter PIN first.");
        }
    };
    return ATM;
}());
// Test
var atm = new ATM();
atm.insertCard();
atm.enterPin(1234);
atm.withdrawCash(200);
atm.insertCard();
atm.enterPin(9999);
atm.withdrawCash(50);
