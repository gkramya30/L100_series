import { Command } from "./Command";

export class RemoteControl {
  private history: Command[] = [];

  pressButton(command: Command) {
    command.execute();
    this.history.push(command);
  }

  pressUndo() {
    const lastCommand = this.history.pop();
    if (lastCommand) {
      lastCommand.undo();
    }
  }
}
