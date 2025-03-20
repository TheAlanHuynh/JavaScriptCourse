'use strict';

// function calcAge(birthYear) {
//   const age = 2023 - birthYear;

//   function printAge() {
//     const output = `${firstName}, you are ${age}, born in ${birthYear}`;
//     console.log(output);

//     if (birthYear >= 1981 && birthYear <= 1996) {
//       var millenial = true;
//       const firstName = 'Steven';
//       const str = `Oh, and you're a millenial, ${firstName}`;
//       console.log(str);

//       function add(a, b) {
//         return a + b;
//       }
//     }

//     // console.log(str);
//     console.log(millenial);
//     // console.log(add(2, 3));
//   }

//   printAge();
//   return age;
// }

// const firstName = 'Alan';
// calcAge(1995);
// // console.log(age);
// // printAge();

// // TDZ for job and year
// // variables
// console.log(me);
// // console.log(job);
// // console.log(year);

// var me = 'Alan';
// let job = 'unemployed';
// const year = '1995';

// // Functions

// console.log(addDecl(2, 3));
// console.log(addArrow);
// // console.log(addExpr(2, 3));

// function addDecl(a, b) {
//   return a + b;
// }

// var addExpr = function (a, b) {
//   return a + b;
// };

// var addArrow = (a, b) => a + b;

// // Example
// if (!numProducts) deleteShoppingCart();

// var numProducts = 10;

// function deleteShoppingCart() {
//   console.log('All products deleted!');
// }

// var x = 1;
// let y = 2;
// const z = 3;

// console.log(x === window.x);
// console.log(y === window.y);
// console.log(z === window.z);

// // calls the global window object
// console.log(this);

// const calcAge = function (birthYear) {
//   console.log(2023 - birthYear);
//   console.log(this);
// };

// calcAge(1995);

// // Arrow functios do not get their own 'this' keyword. they get a 'lexical' this keyword. which takes from their parent scope.
// // in the example. the parent is the global scope
// const calcAgeArrow = birthYear => {
//   console.log(2023 - birthYear);
//   console.log(this);
// };

// calcAgeArrow(1995);

// const alan = {
//   year: 1995,
//   calcAge: function () {
//     console.log(this);
//     console.log(2023 - this.year);
//   },
// };
// alan.calcAge();

// const matilda = {
//   year: 2017,
// };

// matilda.calcAge = alan.calcAge;
// matilda.calcAge();

// const f = alan.calcAge;
// f();

// var firstName = 'Matilda';

// const alan = {
//   firstName: 'Alan',
//   year: 1995,
//   calcAge: function () {
//     console.log(this);
//     console.log(2023 - this.year);

//     // const isMillenial = function () {
//     //   console.log(this.year >= 1981 && this.year <= 1996);
//     // };

//     const isMillenial = () => {
//       console.log(this.year >= 1981 && this.year <= 1996);
//     };

//     isMillenial();
//   },

//   greet: () => {
//     console.log(this);
//     console.log(`Hey ${(this, firstName)}`);
//   },
// };
// // alan.greet();
// alan.calcAge();

// let age = 30;
// let oldAge = age;
// age = 31;
// console.log(age);
// console.log(oldAge);

// const me = {
//   name: 'Alan',
//   age: 30,
// };

// const friend = me;
// friend.age = 27;
// console.log('Friends:', friend);
// console.log('Me', me);

// // Primative types
// let lastName = 'Williams';
// let oldLastName = lastName;
// lastName = 'Davis';
// console.log(lastName, oldLastName);

// // Reference Type
// const jessica = {
//   firstName: 'Jessica',
//   lastName: 'Williams',
//   age: 27,
// };

// // reference in memory CANNOT change, but heap value can
// const marriedJessica = jessica;
// marriedJessica.lastName = 'Davis';
// console.log('Before Marriage:', jessica);
// console.log('After Marriage:', marriedJessica);

// // copying objects
// const jessica2 = {
//   firstName: 'Jessica',
//   lastName: 'Williams',
//   age: 27,
//   family: ['Alice', 'Bob'],
// };

// const jessicaCopy = Object.assign({}, jessica2);
// jessicaCopy.lastName = 'Davis';
// console.log('Before Marriage:', jessica2);
// console.log('After Marriage:', jessicaCopy);

// jessicaCopy.family.push('Mary');
// jessicaCopy.family.push('John');
