import { Memento } from "./Memento";

export class Caretaker {
  private history: Memento[] = [];

  addMemento(memento: Memento): void {
    this.history.push(memento);
  }

  getMemento(index: number): Memento {
    return this.history[index];
  }
}
