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

Person.hey = function () {
  console.log('Hey There!');
  console.log(this);
};

Person.hey();

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
/* 
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
*/

/* Lesson 224 - ES6 Classes 
    - ES6 Classes stil implement prototypal inheritance behind the scenes but
    with a syntax that makes more sense to people coming from other languages.

    1. Classes are NOT hoisted
    2. Class are first-class citizens - You can pass classes into func and return them
    3. Classes are executed in strict mode


// Class expression ex:
// const Personcl = class {}

// Class declaration
class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  // Instance Methods
  // This method is on the prototype and not the object
  // The method will be added to .prototype property
  calcAge() {
    console.log(2037 - this.birthYear);
  }

  greet() {
    console.log(`Hey ${this.fullName}`);
  }

  get age() {
    return 2037 - this.birthYear;
  }

  // Set a property that already exists (use the '_')
  set fullName(name) {
    console.log(name);
    if (name.includes(' ')) this._fullName = name;
    else alert(`${name} is not a full name!`);
  }

  get fullName() {
    return this._fullName;
  }

  // Static Methods
  static hey() {
    console.log('Hey There!');
    console.log(this);
  }
}

const jessica = new PersonCl('Jessica Davis', 1991);
console.log(jessica);
jessica.calcAge();
console.log(jessica.age);

console.log(jessica.__proto__ === PersonCl.prototype);

// PersonCl.prototype.greet = function () {
//   console.log(`Hey ${this.firstName}`);
// };
jessica.greet();

// Every object in JS can have getter and setter properties
// they are considered assessor properties. While other properties
// are called data properties

const walter = new PersonCl('Walter White', 1965);

PersonCl.hey();

const account = {
  owner: 'jonas',
  movements: [200, 530, 120, 300],

  get latest() {
    return this.movements.slice(-1).pop();
  },

  set latest(mov) {
    this.movements.push(mov);
  },
};

console.log(account.latest);

account.latest = 50;
console.log(account.movements);

const PersonProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const steven = Object.create(PersonProto);
console.log(steven);
steven.name = 'Steven';
steven.birthYear = 2002;
steven.calcAge();

console.log(steven.__proto__ === PersonProto);

const sarah = Object.create(PersonProto);
sarah.init('Sarah', 1979);
sarah.calcAge();
*/
///////////////////////////////////////
// Coding Challenge #2

/* 
1. Re-create challenge 1, but this time using an ES6 class;
2. Add a getter called 'speedUS' which returns the current speed in mi/h (divide by 1.6);
3. Add a setter called 'speedUS' which sets the current speed in mi/h (but converts it to km/h before storing the value, by multiplying the input by 1.6);
4. Create a new car and experiment with the accelerate and brake methods, and with the getter and setter.

DATA CAR 1: 'Ford' going at 120 km/h

GOOD LUCK 😀
*/
/* 
class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  accelerate() {
    this.speed += 10;
    console.log(`${this.make} accelerates to ${this.speed}km/h`);
  }

  brake() {
    this.speed -= 5;
    console.log(`${this.make} brakes to ${this.speed}km/h`);
  }

  get speedUS() {
    return this.speed / 1.6;
  }

  set speedUS(speed) {
    this.speed = speed * 1.6;
  }
}

const ford = new CarCl('Ford', 120);
console.log(ford.speedUS);
ford.accelerate();
ford.accelerate();
ford.brake();
ford.speedUS = 50;
console.log(ford);
*/

/* Lesson 229 - Inheritance Between "Classes": Constructor Functions */
/*
const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

const Student = function (firstName, birthYear, course) {
  Person.call(this, firstName, birthYear);
  this.course = course;
};

// Linking Prototypes
Student.prototype = Object.create(Person.prototype);

Student.prototype.introduce = function () {
  console.log(`Hi, my name is ${this.firstName} and I study ${this.course}`);
};

const mike = new Student('Mike', 2020, 'Computer Science');
mike.introduce();
mike.calcAge();

console.log(mike.__proto__);
console.log(mike.__proto__.__proto__);

console.log(mike instanceof Student);
console.log(mike instanceof Person);
console.log(mike instanceof Object);

Student.prototype.constructor = Student;
console.dir(Student.prototype.constructor);
*/
///////////////////////////////////////
// Coding Challenge #3

/* 
1. Use a constructor function to implement an Electric Car (called EV) as a CHILD "class" of Car. Besides a make and current speed, the EV also has the current battery charge in % ('charge' property);
2. Implement a 'chargeBattery' method which takes an argument 'chargeTo' and sets the battery charge to 'chargeTo';
3. Implement an 'accelerate' method that will increase the car's speed by 20, and decrease the charge by 1%. Then log a message like this: 'Tesla going at 140 km/h, with a charge of 22%';
4. Create an electric car object and experiment with calling 'accelerate', 'brake' and 'chargeBattery' (charge to 90%). Notice what happens when you 'accelerate'! HINT: Review the definiton of polymorphism 😉

DATA CAR 1: 'Tesla' going at 120 km/h, with a charge of 23%

GOOD LUCK 😀
*/
/*
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

const EV = function (make, speed, charge) {
  Car.call(this, make, speed);
  this.charge = charge;
};

// Linking Prototypes
EV.prototype = Object.create(Car.prototype);

EV.prototype.chargeBattery = function (chargeTo) {
  this.charge = chargeTo;
  console.log(`${this.make} is charged to ${this.charge}%`);
};

EV.prototype.accelerate = function () {
  this.speed += 20;
  this.charge--;
  console.log(
    `${this.make} going at ${this.speed} km/h, with a charge of ${this.charge}%`
  );
};

const tesla = new EV('Tesla', 120, 23);

tesla.accelerate();
tesla.brake();
tesla.accelerate();
tesla.chargeBattery(100);
*/

/* Lesson 231 - Inheritance Between Classes: ES6 Classes */
///////////////////////////////////////
// Inheritance Between "Classes": ES6 Classes
/*
class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  // Instance methods
  calcAge() {
    console.log(2037 - this.birthYear);
  }

  greet() {
    console.log(`Hey ${this.fullName}`);
  }

  get age() {
    return 2037 - this.birthYear;
  }

  set fullName(name) {
    if (name.includes(' ')) this._fullName = name;
    else alert(`${name} is not a full name!`);
  }

  get fullName() {
    return this._fullName;
  }

  // Static method
  static hey() {
    console.log('Hey there 👋');
  }
}

class StudentCl extends PersonCl {
  constructor(fullName, birthYear, course) {
    // Super func needs to ALWAYS be called first
    super(fullName, birthYear);
    this.course = course;
  }

  introduce() {
    console.log(`Hi, my name is ${this.fullName} and I study ${this.course}`);
  }

  calcAge() {
    console.log(
      `I'm ${
        2037 - this.birthYear
      } years old, but as a student I feel more like ${
        2037 - this.birthYear + 10
      }`
    );
  }
}

const martha = new StudentCl('Martha Jones', 2012, 'Computer Science');
martha.introduce();
martha.calcAge();
*/

/* Lesson 232 - Inheritance Between "classes": Object.create() */
///////////////////////////////////////
// Inheritance Between "Classes": Object.create
/*
const PersonProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const steven = Object.create(PersonProto);

const StudentProto = Object.create(PersonProto);

StudentProto.init = function (firstName, birthYear, course) {
  PersonProto.init.call(this, firstName, birthYear);
  this.course = course;
};

StudentProto.introduce = function () {
  console.log(`Hi, my name is ${this.firstName} and I study ${this.course}`);
};

const jay = Object.create(StudentProto);
jay.init('Jay', 2010, 'Computer Science');
jay.introduce();
jay.calcAge();
*/

///////////////////////////////////////
// Encapsulation: Protected Properties and Methods
// Encapsulation: Private Class Fields and Methods

// 1) Public fields
// 2) Private fields (where we can implement Encapsulation)
// 3) Public methods
// 4) Private methods
// (there is also the static version)
/*
class Account {
  // Public fields
  locale = navigator.language;
  bank = 'Bankist';
  // Private Fields
  #movements = [];
  #pin;

  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.#pin = pin; // Private Field
    this.movements = [];
    // this.locale = navigator.language;

    console.log(`Thanks for opening a new account, ${this.owner}`);
  }

  // Public Interface API/Methods
  getMovements() {
    return this.#movements;
    // Not Chainable
  }
  deposit(val) {
    this.#movements.push(val);
    return this;
  }

  withdraw(val) {
    this.deposit(-val);
    return this;
  }

  // private method
  #approveLoan(val) {
    // Fake Method (ex: complex algorithm)
    return true;
  }

  requestLoan(val) {
    if (this.#approveLoan(val)) {
      this.deposit(val);
      console.log(`Loan approved`);
    }
    return this;
  }

  static test() {
    return true;
  }
}

const acc1 = new Account('Jonas', 'EUR', 1111);
// acc1.deposit(300);
// acc1.withdraw(300);
acc1
  .deposit(300)
  .withdraw(100)
  .withdraw(50)
  .requestLoan(25000)
  // .getMovements()
  .withdraw(4000)
  .getMovements();

console.log(acc1);
// console.log(acc1.#movements);
// Account.test();
*/

///////////////////////////////////////
// Coding Challenge #4

/* 
1. Re-create challenge #3, but this time using ES6 classes: create an 'EVCl' child class of the 'CarCl' class
2. Make the 'charge' property private;
3. Implement the ability to chain the 'accelerate' and 'chargeBattery' methods of this class, and also update the 'brake' method in the 'CarCl' class. They experiment with chining!

DATA CAR 1: 'Rivian' going at 120 km/h, with a charge of 23%

GOOD LUCK 😀
*/
/*
class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  accelerate() {
    this.speed += 10;
    console.log(`${this.make} is going at ${this.speed} km/h`);
  }

  brake() {
    this.speed -= 5;
    console.log(`${this.make} is going at ${this.speed} km/h`);
    return this;
  }

  get speedUS() {
    return this.speed / 1.6;
  }

  set speedUS(speed) {
    this.speed = speed * 1.6;
  }
}
class EVCl extends CarCl {
  #charge;

  constructor(make, speed, charge) {
    super(make, speed);
    this.#charge = charge;
  }

  chargeBattery(chargeTo) {
    this.#charge = chargeTo;
    return this;
  }

  accelerate() {
    this.speed += 20;
    this.#charge--;
    console.log(
      `${this.make} is going at ${this.speed} km/h, with a charge of ${
        this.#charge
      }`
    );
    return this;
  }
}
const rivian = new EVCl('Rivian', 120, 23);
console.log(rivian);
// console.log(rivian.#charge);
rivian
  .accelerate()
  .accelerate()
  .accelerate()
  .brake()
  .chargeBattery(50)
  .accelerate();

console.log(rivian.speedUS);
*/
