function evaluate(expression: string): number {
  // Very naive approach (not extensible, not safe)
  return Function(`return ${expression}`)();
}

// Test
console.log(`Result: ${evaluate("5 + 3 - 2")}`); // Result: 6
