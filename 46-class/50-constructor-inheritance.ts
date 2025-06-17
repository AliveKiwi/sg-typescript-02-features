// Alternate to writing color in the constructor
// Class with a constructor using public property shorthand
// See what happens when you change the visibility of the property

class Vehicle {
  constructor(public color: string) {} // super() is used to call this parent constructor

  protected honk(): void {
    console.log('Beep beep');
  }
}

const vehcile = new Vehicle('orange');
console.log(vehcile.color);

class Car extends Vehicle {
  // constructor(public wheels: number, public color: string) {}
  constructor(public wheels: number, color: string) {
    super(color); // Call the parent constructor with a default color
  }

  private drive(): void {
    console.log('Vroom vroom');
  }

  startDrivingProcess(): void {
    this.drive();
    this.honk();
  }
}

const car = new Car(4, 'red');

// The following line will work because startDrivingProcess is public
car.startDrivingProcess();
