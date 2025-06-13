// Object type annotation in TypeScript
// In TypeScript, we can annotate the type of an object to ensure that it has the expected structure.
// This is particularly useful when working with complex objects or when passing objects as function parameters.
// Example of an object with a specific structure
const profile = {
  name: 'alex',
  age: 20,
  coords: {
    lat: 0,
    lng: 5,
  },
  set(age: number): void {
    this.age = age;
  },
};

// Explicitly annotating the object type

const { age, name }: { age: number; name: string } = profile;
const {
  coords: { lat, lng },
}: { coords: { lat: number; lng: number } } = profile;
