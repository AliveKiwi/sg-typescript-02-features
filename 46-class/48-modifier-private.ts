// Modifiers - Restrict access to properties and methods in a class
// Public - variable and method are accessible everywhere
// Private - variable and method are only accessible only within the class
// Protected - variable and method can only be accessed or called within the class and subclasses

class Vehicle {
  public honk(): void {
    console.log('Beep beep');
  }
}

// We have overridden the drive method in the Car class
class Car extends Vehicle {
  private drive(): void {
    console.log('Vroom vroom');
  }

  startDrivingProcess(): void {
    this.drive(); // Can call the private method within the class
  }
}

const car = new Car();
// The following line will cause an error because drive is privat
car.drive();

// The following line will work because startDrivingProcess is public
car.startDrivingProcess();
