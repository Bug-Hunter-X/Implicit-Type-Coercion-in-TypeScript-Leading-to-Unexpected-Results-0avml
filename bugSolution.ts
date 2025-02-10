function add(a: number, b: number): number {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Both arguments must be numbers');
  }
  return a + b;
}

function subtract(a: number, b: number): number {
  return a - b;
}

console.log(add(5, 3)); // Output: 8
console.log(subtract(10, 4)); // Output: 6

// Now, this call results in a runtime error, which is expected:
//console.log(add(5, "3")); // throws Error: Both arguments must be numbers