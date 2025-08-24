export interface ATMState {
  insertCard(): void;
  ejectCard(): void;
  enterPin(pin: number): void;
  withdrawCash(amount: number): void;
}

export class NoCardState implements ATMState {
  constructor(private atm: any) {}

  insertCard(): void {
    console.log("Card inserted.");
    this.atm.setState(this.atm.hasCardState);
  }
  ejectCard(): void {
    console.log("No card to eject.");
  }
  enterPin(): void {
    console.log("Insert a card first.");
  }
  withdrawCash(): void {
    console.log("Insert a card first.");
  }
}

export class HasCardState implements ATMState {
  constructor(private atm: any) {}

  insertCard(): void {
    console.log("Card already inserted.");
  }
  ejectCard(): void {
    console.log("Card ejected.");
    this.atm.setState(this.atm.noCardState);
  }
  enterPin(pin: number): void {
    if (pin === 1234) {
      console.log("PIN accepted.");
      this.atm.setState(this.atm.authenticatedState);
    } else {
      console.log("Wrong PIN. Card ejected.");
      this.atm.setState(this.atm.noCardState);
    }
  }
  withdrawCash(): void {
    console.log("Enter PIN first.");
  }
}

export class AuthenticatedState implements ATMState {
  constructor(private atm: any) {}

  insertCard(): void {
    console.log("Transaction in progress. Card already inserted.");
  }
  ejectCard(): void {
    console.log("Card ejected.");
    this.atm.setState(this.atm.noCardState);
  }
  enterPin(): void {
    console.log("Already authenticated.");
  }
  withdrawCash(amount: number): void {
    console.log(`Withdrew $${amount}.`);
    this.atm.setState(this.atm.noCardState);
  }
}
