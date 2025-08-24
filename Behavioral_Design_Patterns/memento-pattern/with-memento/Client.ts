import { Editor } from "./Editor";
import { Caretaker } from "./Caretaker";

const editor = new Editor();
const caretaker = new Caretaker();

editor.type("Hello ");
caretaker.addMemento(editor.save());

editor.type("World! ");
caretaker.addMemento(editor.save());

editor.type("This will be undone.");

// Current content
console.log("Current content:", editor.getContent());

// Undo to previous state
editor.restore(caretaker.getMemento(1));
console.log("After undo:", editor.getContent());

// Undo to first state
editor.restore(caretaker.getMemento(0));
console.log("After second undo:", editor.getContent());
