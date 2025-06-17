// Modifiers - Restrict access to properties and methods in a class
// Public - variable and method are accessible everywhere
// Private - variable and method are only accessible only within the class
// Protected - variable and method can only be accessed or called within the class and subclasses

class Vehicle {
  public drive(): void {
    console.log('Chugga chugga');
  }
  public honk(): void {
    console.log('Beep beep');
  }
}
// We have overridden the drive method in the Car class
class Car extends Vehicle {
  public drive(): void {
    console.log('Vroom vroom');
  }
}

const car = new Car();
car.drive();
car.honk();
