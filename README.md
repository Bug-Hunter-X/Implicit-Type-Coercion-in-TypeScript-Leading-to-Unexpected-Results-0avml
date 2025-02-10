# Implicit Type Coercion Bug in TypeScript

This repository demonstrates a subtle bug in TypeScript related to implicit type coercion.  The `add` function is defined to accept two numbers, but TypeScript doesn't prevent a string from being passed as an argument.  This results in unexpected string concatenation instead of numerical addition.

## How to Reproduce

1. Clone this repository.
2. Compile and run the `bug.ts` file using the TypeScript compiler (tsc) and Node.js (node).
3. Observe the unexpected output from the `add` function call with a string argument.

## Solution

The `bugSolution.ts` file shows how to fix this issue using explicit type checking and more robust type handling. The solution demonstrates strict type checking which prevents the type coercion that causes unexpected behavior. 