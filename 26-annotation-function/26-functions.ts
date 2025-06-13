// Always write annotations in function arguments no inference
// Although typescript can infer the return but we still explictly define it

const add = (a: number, b: number): number => {
  return a + b;
};

// return type is void because we forgot to add return
// But, if we annotate the return type, it will throw an error
const sub = (a: number, b: number): number => {
  a + b;
};

function divide(a: number, b: number): number {
  return a / b;
}

const multiply = function (a: number, b: number): number {
  return a * b;
};
