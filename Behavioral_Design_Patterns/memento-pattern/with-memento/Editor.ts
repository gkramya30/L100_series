import { Memento } from "./Memento";

export class Editor {
  private content: string = "";

  type(words: string): void {
    this.content += words;
  }

  getContent(): string {
    return this.content;
  }

  save(): Memento {
    return new Memento(this.content);
  }

  restore(memento: Memento): void {
    this.content = memento.getState();
  }
}
