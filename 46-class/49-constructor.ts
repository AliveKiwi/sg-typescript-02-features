// Class with a constructor

class Vehicle {
  // color: string = 'red';

  color: string;

  constructor(color: string) {
    this.color = color;
  }

  protected honk(): void {
    console.log('Beep beep');
  }
}

const vehcile = new Vehicle('orange');
console.log(vehcile.color);
