// Exporting Module
console.log('Exporting Module');

// Blocking code:
// console.log('Start Fetching Users');
// await fetch(`https://jsonplaceholder.typicode.com/users`);
// console.log('Finishing Fetching Users');

// scope to module
// private variables to module
const shippingCost = 10;
export const cart = [];

// Given the handle 'export' allows the function to be exported
// Exports need to occur in top-level code
export const addToCart = function (product, quantity) {
  cart.push({ product, quantity });
  console.log(`${quantity} ${product} added to cart`);
};

const totalPrice = 237;
const totalQuantity = 23;

// export multiple things with Named Exports
export { totalPrice, totalQuantity as tq };

export default function (product, quantity) {
  cart.push({ product, quantity });
  console.log(`${quantity} ${product} added to cart`);
}
