interface Reportable {
  summary(): string;
}

const oldCivic = {
  name: 'civic',
  year: new Date(),
  broken: true,
  summary(): string {
    return `Name: ${this.name}`;
  },
};

const printSummary = (item: Reportable): void => {
  console.log(item.summary());
};

printSummary(oldCivic);
// The printSummary function can now accept any object that implements the Reportable interface,
// allowing for greater flexibility and reusability in the code.
// This is useful for objects that have a summary method, such as oldCivic.
// This approach allows for polymorphism, where different objects can be passed to the same function
// as long as they adhere to the Reportable interface.
// This is a powerful feature of TypeScript that allows for more abstract and flexible code design.
// The Reportable interface defines a contract that any object must follow to be used with printSummary.
// This allows for better code organization and separation of concerns,
// as the printSummary function does not need to know the details of the objects it works with,
// only that they implement the summary method.
// This is a common pattern in TypeScript and is often used in libraries and frameworks
// to allow for extensibility and customization by users of the library.
// By using interfaces, we can define clear contracts for our objects,
// making our code more maintainable and easier to understand.
// This approach also allows for better type checking and error handling,
// as TypeScript will enforce that any object passed to printSummary
// must implement the Reportable interface.
// This can help catch errors early in the development process,
// leading to more robust and reliable code.
// In summary, using interfaces in TypeScript allows for more flexible and reusable code,
// enabling polymorphism and better code organization.
