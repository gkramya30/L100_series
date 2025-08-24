import { ATMState, NoCardState, HasCardState, AuthenticatedState } from "./ATMState";

export class ATMContext {
  public noCardState: ATMState;
  public hasCardState: ATMState;
  public authenticatedState: ATMState;

  private currentState: ATMState;

  constructor() {
    this.noCardState = new NoCardState(this);
    this.hasCardState = new HasCardState(this);
    this.authenticatedState = new AuthenticatedState(this);

    this.currentState = this.noCardState;
  }

  setState(state: ATMState) {
    this.currentState = state;
  }

  insertCard() {
    this.currentState.insertCard();
  }

  ejectCard() {
    this.currentState.ejectCard();
  }

  enterPin(pin: number) {
    this.currentState.enterPin(pin);
  }

  withdrawCash(amount: number) {
    this.currentState.withdrawCash(amount);
  }
}
