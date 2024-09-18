enum orderTypes {
  PIZZA = 1,
  BURGER, //2
  APPLE_JUICE = 5,
  MANGO_JUICE, //6
  COKE, //7
}
// if we don't assign value to the first element, it will be 0 by default
// if we assign value to an element, the next elements will be incremented by 1

const myOrders = [orderTypes.PIZZA, orderTypes.APPLE_JUICE];
console.log(myOrders); // [ 0, 2 ]

// orderTypes.PIZZA = 0; // Error: Cannot assign to 'PIZZA' because it is a read-only property.

const enum orderTypes2 {
  PIZZA = 1,
  BURGER, //2
  APPLE_JUICE = 5,
  MANGO_JUICE, //6
  COKE, //7
}

// this will not create crazy javascript iife code
const myOrders2 = [orderTypes2.PIZZA, orderTypes2.APPLE_JUICE];

export {};
