class Editor {
  private content: string = "";
  private history: string[] = [];

  type(words: string): void {
    this.content += words;
    this.history.push(this.content); // direct history handling
  }

  getContent(): string {
    return this.content;
  }

  undo(): void {
    if (this.history.length > 1) {
      this.history.pop(); // remove last
      this.content = this.history[this.history.length - 1];
    } else {
      this.content = "";
    }
  }
}

// Test
const editor = new Editor();

editor.type("Hello ");
editor.type("World! ");
editor.type("This will be undone.");

console.log("Current content:", editor.getContent());

editor.undo();
console.log("After undo:", editor.getContent());

editor.undo();
console.log("After second undo:", editor.getContent());
