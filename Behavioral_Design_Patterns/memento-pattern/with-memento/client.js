"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Editor_1 = require("./Editor");
var Caretaker_1 = require("./Caretaker");
var editor = new Editor_1.Editor();
var caretaker = new Caretaker_1.Caretaker();
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
