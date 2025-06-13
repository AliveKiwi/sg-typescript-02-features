// Type inference in TypeScript allows us to define the type of an array
// const carMakers = ['ford', 'toyota', 'chevy'];

// TypeScript will infer the type of the array based on the values provided
// const carMakers = [] // type => any

// TypeScript allows you to define the type of an array using type annotations
const carMakers: string[] = ['ford', 'toyota', 'chevy'];

// TypeScript can also infer the type of an array based on the values provided
// const dates = [new Date(), new Date()];
const dates: Date[] = [new Date(), new Date()];

// 2D arrays can also be defined using type annotations
const carsByMake: string[][] = [['f150'], ['corolla'], ['camaro']];

// 1) Help with inference when extracting values
const car = carMakers[0];
const myCar = carMakers.pop();

// 2) Prevent incompatible values from being inserted
carMakers.push(100);
