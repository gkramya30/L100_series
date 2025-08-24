function evaluate(expression) {
    // Very naive approach (not extensible, not safe)
    return Function("return ".concat(expression))();
}
// Test
console.log("Result: ".concat(evaluate("5 + 3 - 2"))); // Result: 6
