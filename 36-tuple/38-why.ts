// Why tuples are not useful in TypeScript
// Tuples are not useful in TypeScript because they are not as flexible as arrays
// and do not provide the same level of type safety. Tuples are fixed-length arrays with specific types for each index, which can lead to less readable and maintainable code. In contrast, arrays in TypeScript allow for more flexibility and better type inference, making them a more suitable choice for most use cases.
// Additionally, tuples can be more difficult to work with when it comes to operations like mapping, filtering, and reducing, as they require more explicit type definitions and can lead to more complex code. Overall, while tuples have their use cases, they are generally not as useful as arrays in TypeScript for most scenarios.
// Tuples are not useful in TypeScript because they are not as flexible as arrays
// and do not provide the same level of type safety. Tuples are fixed-length arrays with specific types for each index, which can lead to less readable and maintainable code. In contrast, arrays in TypeScript allow for more flexibility and better type inference, making them a more suitable choice for most use cases.

const carSpecs: [number, number] = [400, 3354];

const carStats = {
  horsepower: carSpecs[0],
  weight: carSpecs[1],
};
