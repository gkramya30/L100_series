class ATM {
  private state: string = "NoCard";

  insertCard() {
    if (this.state === "NoCard") {
      console.log("Card inserted.");
      this.state = "HasCard";
    } else {
      console.log("Card already inserted or invalid state.");
    }
  }

  ejectCard() {
    if (this.state === "HasCard" || this.state === "Authenticated") {
      console.log("Card ejected.");
      this.state = "NoCard";
    } else {
      console.log("No card to eject.");
    }
  }

  enterPin(pin: number) {
    if (this.state === "HasCard") {
      if (pin === 1234) {
        console.log("PIN accepted.");
        this.state = "Authenticated";
      } else {
        console.log("Wrong PIN. Card ejected.");
        this.state = "NoCard";
      }
    } else {
      console.log("Insert card first.");
    }
  }

  withdrawCash(amount: number) {
    if (this.state === "Authenticated") {
      console.log(`Withdrew $${amount}.`);
      this.state = "NoCard";
    } else {
      console.log("You must insert a card and enter PIN first.");
    }
  }
}

// Test
const atm = new ATM();
atm.insertCard();
atm.enterPin(1234);
atm.withdrawCash(200);
atm.insertCard();
atm.enterPin(9999);
atm.withdrawCash(50);
