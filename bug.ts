function add(a: number, b: number): number {
  return a + b;
}

function subtract(a: number, b: number): number {
  return a - b;
}

console.log(add(5, 3)); // Output: 8
console.log(subtract(10, 4)); // Output: 6

// The bug is that TypeScript does not complain about the following call, even though it is invalid:
console.log(add(5, "3")); // Output: 53.  This should result in a compiler error, because we're mixing number and string types. 