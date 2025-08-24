var Editor = /** @class */ (function () {
    function Editor() {
        this.content = "";
        this.history = [];
    }
    Editor.prototype.type = function (words) {
        this.content += words;
        this.history.push(this.content); // direct history handling
    };
    Editor.prototype.getContent = function () {
        return this.content;
    };
    Editor.prototype.undo = function () {
        if (this.history.length > 1) {
            this.history.pop(); // remove last
            this.content = this.history[this.history.length - 1];
        }
        else {
            this.content = "";
        }
    };
    return Editor;
}());
// Test
var editor = new Editor();
editor.type("Hello ");
editor.type("World! ");
editor.type("This will be undone.");
console.log("Current content:", editor.getContent());
editor.undo();
console.log("After undo:", editor.getContent());
editor.undo();
console.log("After second undo:", editor.getContent());
