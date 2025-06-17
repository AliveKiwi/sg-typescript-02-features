class Vehicle {
  drive(): void {
    console.log('Chugga chugga');
  }
  honk(): void {
    console.log('Beep beep');
  }
}

// We have overridden the drive method in the Car class
class Car extends Vehicle {
  drive(): void {
    console.log('Vroom vroom');
  }
}

const car = new Car();
car.drive();
car.honk();
