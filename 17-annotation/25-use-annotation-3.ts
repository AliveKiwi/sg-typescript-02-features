// 3) When a variable's type cannot be inferred correctly or we want to add multiple types
// Example: Using union type annotation to allow a variable to hold either a boolean or a number
// This is useful when a variable can hold different types of values, such as a boolean or a number.
// This code demonstrates how to use union type annotations in TypeScript to allow a variable to hold multiple types.

let numbers = [-10, -1, 12];
let numberAboveZero: boolean | number = false;

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 0) {
    numberAboveZero = numbers[i]; // will throw an error if we don't annotate with multiple type
  }
}
