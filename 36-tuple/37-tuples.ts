const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 40,
};

// Type alias
type Drink = [string, boolean, number];

const pepsi: [string, boolean, number] = ['brown', true, 40];

// const pepsi[0]=10

const sprite: Drink = ['clear', true, 40];

const tea: Drink = ['brown', false, 0];
