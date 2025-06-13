// 3) When a variable's type cannot be inferred correctly or we want to add multiple types
//
let numbers = [-10, -1, 12];
let numberAboveZero = false;

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 0) {
    numberAboveZero = numbers[i]; // will throw an error if we don't annotate with multiple type
  }
}
