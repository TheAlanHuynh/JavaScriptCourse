// Importing Module
console.log('Importing Module');

/* Lesson 280 - Overview of Modern JavaScript Development:

  - For larger applications, scripts are broken up into modules.
    - The goal is to allow for the code to be more organized and maintainable.
    - In addition, this allows for easier intgration of third-party modules.
      - Third-party modules can be accessed through NPM
  
  - NPM: Node Package Manager
    - A command line interface.
    - The NPM software is used to download third-party modules/packages.
  
  - Build Process:
    - When we take the development of our multiple modules and third-party packages through a build process to create one final JavaScript bundle.
    - The javascript bundle is then deployed onto the web server.
    1. Bundling:
      - compressing together all code
    2. Transpiling/Polyfilling:
      - convert all modern JS syntax to ES5 syntax
    - We use tools for the build process 'JavaScript Bundlers'
    - Ex: Webpack and Parcel

*/

/* Lesson 281 - An Overview of Modules in JS:

Modules, in general:
  - Module:
    - A reusable piece of code that encapsulates implementation details
    - Usually, a standalone file, doesn't have to be.

  - Compose Software:
    - Modules are small building blocks that we put together to build complex applications.

  - Isolate Components:
    - Modules can be developed in isolation without thinking about the entire codebase.

  - Abstract code:
    - Implement low-level code in modules and import these abstractions into other modules.
    
  - Organized Code: 
    - Modules naturally lead to a more organized codebase.

  - Reuse Code:
    - Modules allow us to easily reuse the same code, even across multiple projects.

Modules in JavaScript:
  - ES6 Modules:
    - Modules stored in files, exactly one module per file.

  - ES6 Modules vs. Script
    - Top-level variables:
      - ES6:      Scoped to modules
      - Scripts:  Global

    - Default mode:
      - ES6:      Strict mode
      - Scripts:  Sloopy mode

    - Top-level 'this':
      - ES6:      undefined
      - Scripts:  window

    - Imports and exports:
      - ES6:      Yes
      - Scripts:  No

    - HTML linking:
      - ES6:      <script type='module'></script>
      - Scripts:  <script></script>
    
    - File Downloading:
      - ES6:      asynchronous
      - Scripts:  synchronous
*/

/* Lesson 282 - Exporting and Importing in ES6 modules */

// variable name need to be identical
// import {
//   addToCart,
//   totalPrice as price,
//   tq as quantity,
// } from './shoppingCart.js';

// addToCart('Bread', 5);
// console.log(price, quantity);
// console.log(shippingCost);

// import * as ShoppingCart from './shoppingCart.js';
// ShoppingCart.addToCart('Bread', 5);
// console.log(ShoppingCart.totalPrice);

// Import Default default exports
// import add, {
//   addToCart,
//   totalPrice as price,
//   tq as quantity,
// } from './shoppingCart.js';

// Imports are not copies, they are a live connection
import add, { cart } from './shoppingCart.js';
add('pizza', 2);
add('bread', 5);
add('apple', 4);
console.log(cart);
/*
// Top-level await (only works in modules)
console.log('Start Fetching');

// Await is blocking
// const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
// const data = await res.json();
// console.log(data);
// console.log('Something');

const getLastPost = async function () {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  const data = await res.json();
  // console.log(data);
  return { title: data.at(-1).title, text: data.at(-1).body };
};

const lastPost = getLastPost(); // pending promise
console.log(lastPost);

// Not very clean
// lastPost.then(last => console.log(last));

const lastPost2 = await getLastPost();
console.log(lastPost2);
*/
/* Lesson 284 - Module Pattern */

/*
// Goal: function is created once so no reuse code
const shippingCart2 = (function () {
  const cart = [];
  const shippingCost = 10;
  const totalPrice = 237;
  const totalQuantity = 23;

  const addToCart = function (product, quantity) {
    cart.push({ product, quantity });
    console.log(
      `${quantity} ${product} added to cart Shipping cost is ${shippingCost}`
    );
  };

  const addTStock = function (product, quantity) {
    console.log(`${quantity} ${product} ordered from supplier`);
  };

  return {
    addToCart,
    cart,
    totalPrice,
    totalQuantity,
  };
})();

shippingCart2.addToCart('apple', 4);
shippingCart2.addToCart('pizza', 2);
console.log(shippingCart2);
*/

/* Lesson 285 - Common JS Modules */
/*
// Node JS module example
// Export
export.addToCart = function (product, quantity) {
  cart.push({ product, quantity });
  console.log(
    `${quantity} ${product} added to cart Shipping cost is ${shippingCost}`
  );
};

// Import
const {addToCart} = require('./shoppingCart')
*/

/* Lesson 287 - Introduction to NPM */

import cloneDeep from './node_modules/lodash-es/cloneDeep.js';
// import cloneDeep from 'lodash-es';

const state = {
  cart: [
    { product: 'bread', quantitiy: 5 },
    { product: 'pizza', quantitiy: 5 },
  ],
  user: { loggedIn: true },
};

const stateClone = Object.assign({}, state);
const stateDeepClone = cloneDeep(state);
state.user.loggedIn = false;
console.log(stateClone);
console.log(stateDeepClone);

if (module.hot) {
  module.hot.accept();
}

class Person {
  #greeting = 'Hey';
  constructor(name) {
    this.name = name;
    console.log(`${this.#greeting}, ${this.name}`);
  }
}
const jonas = new Person('Jonas');

console.log('Jonas' ?? null);

console.log(cart.find(el => el.quantity >= 2));
Promise.resolve('TEST').then(x => console.log(x));

// import 'core-js/stable';
import 'core-js/stable/array/find';
import 'core-js/stable/promise';

// Polifilling async functions
import 'regenerator-runtime/runtime';
