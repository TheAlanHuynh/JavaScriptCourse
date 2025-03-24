'use strict';
/* Lesson 218 - OOP in JavaScript */
/*
  In General:
  - Class: Blueprint 
  - Instance: actual objects 
  - Instantiation: the process of creating an instance from a class

  In JavaScript:
  - Prototype: the JS version of Classes
  - Objects: instances of prototype
  - Prototypal Inheritance/Delegation: 
    - The prototype contains methods(behaviours) that are accessible to all objects linked to that prototype
    - Not entirely similar to general class inheritance. Here, think of it as instances inheriting from class  
    - Object Delegate Behaviour to Linked Prototype, behaviour is another term for methods

  How to create prototypes in JS:
  1. Constructor Functions
  2. ES6 Classes
    - more user-friendly syntax, but use constructor functions on a lower level
  3. Object.create()
    - easiest and simpliest way to link objects to prototypes
    - not used as much as the other 2 methods
*/

/* Lesson 219 - Constructor Functions and the new Operator */
/*
// Convention in OOP: Constructor Functions always start with a capital letter (similar with Arrays and Maps)
const Person = function (firstName, birthYear) {
  // console.log(this);
  this.firstName = firstName;
  this.birthYear = birthYear;

  // Bad Practice: Never create a method inside a constructor function
  // because linear growth of function with growth of instances
  // therefore slow down of performance
  // this.calcAge = function () {
  //   console.log(2037 - birthYear);
  // };
};

// The difference between a constructor function and a regular function is the 'new' keyword
const jonas = new Person('Jonas', 1991);
console.log(jonas);

// Behind the scene, 4 steps
// 1. New empty object is created, (New {})
// 2. function is called, this keyword is set to the empty object (this = {})
// 3. New created object is linked to prototype
// 4. function automatically return the empty object, {}

const matilda = new Person('Matilda', 2017);
const jack = new Person('Jack', 1975);
console.log(matilda, jack);

const jay = 'Jay';

console.log(jonas instanceof Person);
console.log(jay instanceof Person);

// Prototypes
// All functions in JS have a property called 'prototype'
// Every pbject created by a constructor function will get access to
// all the methods and properties defined in the constructure function
console.log(Person.prototype);
// There is only one copy of this function now instead of one copy
// per object created
Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

jonas.calcAge();
matilda.calcAge();

console.log(jonas.__proto__);
console.log(jonas.__proto__ === Person.prototype);
// Person.prototype is the portotype of the objects of the constructor function
// However, Person.prototype is NOT the prototype of the constructor function
console.log(Person.prototype.isPrototypeOf(jonas));
console.log(Person.prototype.isPrototypeOf(matilda));
console.log(Person.prototype.isPrototypeOf(Person));

Person.prototype.species = 'Homo Sapiens';
console.log(jonas.species, matilda.species);

// The species property is not the object's own property
// only properties directly declared on the object are its own
// therefore, the species property is inherited
console.log(jonas.hasOwnProperty('firstName'));
console.log(jonas.hasOwnProperty('species'));

console.log(jonas.__proto__);
// Object.prototype (top of prototype chain)
console.log(jonas.__proto__.__proto__);
console.log(jonas.__proto__.__proto__.__proto__);

console.log(Person.prototype.constructor);
console.dir(Person.prototype.constructor);

const arr = [3, 6, 6, 4, 5, 6, 9, 9];
console.log(arr.__proto__); // new Array === []
console.log(arr.__proto__ === Array.prototype);
console.log(arr.__proto__.__proto__);

// Extending a prototype of a bulit-in object
// Generally: Bad Idea
Array.prototype.unique = function () {
  return [...new Set(this)];
};

console.log(arr.unique());

const h1 = document.querySelector('h1');
console.dir(x => x + 1);
*/
///////////////////////////////////////
// Coding Challenge #1

/* 
1. Use a constructor function to implement a Car. A car has a make and a speed property. The speed property is the current speed of the car in km/h;
2. Implement an 'accelerate' method that will increase the car's speed by 10, and log the new speed to the console;
3. Implement a 'brake' method that will decrease the car's speed by 5, and log the new speed to the console;
4. Create 2 car objects and experiment with calling 'accelerate' and 'brake' multiple times on each of them.

DATA CAR 1: 'BMW' going at 120 km/h
DATA CAR 2: 'Mercedes' going at 95 km/h

GOOD LUCK 😀
*/

const Car = function (make, speed) {
  // Instance properties
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`${this.make} accelerates to ${this.speed}km/h`);
};

Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(`${this.make} brakes to ${this.speed}km/h`);
};

const bmw = new Car('BMW', 120);
const mercedes = new Car('Mercedes', 95);

bmw.accelerate();
bmw.brake();
bmw.accelerate();
bmw.accelerate();
bmw.accelerate();

mercedes.accelerate();
mercedes.accelerate();
mercedes.brake();
mercedes.brake();
mercedes.accelerate();
mercedes.accelerate();
mercedes.accelerate();
