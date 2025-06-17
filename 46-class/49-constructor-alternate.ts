// Alternate to writing color in the constructor
// Class with a constructor using public property shorthand
// See what happens when you change the visibility of the property

class Vehicle {
  constructor(public color: string) {}

  protected honk(): void {
    console.log('Beep beep');
  }
}

const vehcile = new Vehicle('orange');
console.log(vehcile.color);
