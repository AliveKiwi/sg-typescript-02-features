const oldCivic = {
  name: 'civic',
  year: 2000,
  broken: true,
};

// What is problem with this code?
// The type annotation is too long, and hard to read.
const printVehicle = (vehicle: {
  name: string;
  year: number;
  broken: boolean;
}): void => {
  console.log(`Name: ${vehicle.name}`);
  console.log(`Year: ${vehicle.year}`);
  console.log(`Broken: ${vehicle.broken}`);
};

printVehicle(oldCivic);
