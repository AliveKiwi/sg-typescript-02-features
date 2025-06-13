// A function that never returns a value is annotated with `never`.
// It is typically used for functions that always throw an error or have an infinite loop.
// This is useful for functions that are not supposed to complete or reach a return statement.
// Example of a function that never returns
// This function will never return because it always throws an error
// or it has an infinite loop.

const throwError1 = (message: string): never => {
  throw new Error(message);
};

const throwError2 = (message: string): string => {
  if (!message) {
    throw new Error(message);
  }
  return message;
};
