//  Lecture 32 - Strict Mode:
// Strict Mode most be the first line of code in your script to be active
// Strict Mode helps developers reduce the number of bugs in their code
// 1. Forbids developers to do certain things
// 2. Create visble errors
"use strict";

/*
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log("I can drive");

// const interface = "Audio";
// const private = 534;
// const if = 23;


// Lecture 33 - Functions:

function logger() {
  console.log("My name is Alan");
}

// calling / running / invoking function
logger(23);
logger();
logger();

function fruitProcessor(apples, oranges) {
  console.log(apples, oranges);
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);
console.log(fruitProcessor(5, 0));

const appleOrangeJuice = fruitProcessor(2, "three");
console.log(appleOrangeJuice);
console.log(typeof appleOrangeJuice);

const num = Number("23");


// Lecture 34 - Declarations vs Expressions

// function declaration
function calcAge1(birthYear) {
  return 2037 - birthYear;
}

// Parameter = "birthYear", Argument = "1991"
const age1 = calcAge1(1991);
console.log(age1);

// function expression
// Function w/out a name, an Anonymouus Function, the function is an expression
const calcAge2 = function (birthYear) {
  return 2037 - birthYear;
};

const age2 = calcAge2(1991);

console.log(age1, age2);

// Lecture 35 - Arrow Functions

// function expression
const calcAge2 = function (birthYear) {
  return 2037 - birthYear;
};

// Arrow Function
const calcAge3 = (birthYear) => 2037 - birthYear;
const age3 = calcAge3(1991);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2037 - birthYear;
  const retirement = 65 - age;
  // return retirement;
  return `${firstName} retires in ${retirement} years`;
};

console.log(yearsUntilRetirement(1991, "Jonas"));
console.log(yearsUntilRetirement(1980, "Bob"));

// Lecture 36 - Functions Calling Other Functions

function cutFruitPieces(fruit) {
  return fruit * 4;
}

function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);

  const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`;
  return juice;
}

console.log(fruitProcessor(2, 3));

// Lecture 37 - Reviewing Functions

const calcAge = function (birthYear) {
  return 2037 - birthYear;
};

const yearsUntilRetirement = function (birthYear, firstName) {
  const age = calcAge(birthYear);
  const retirement = 65 - age;

  if (retirement > 0) {
    console.log(`${firstName} retires in ${retirement} years`);
    return retirement;
  } else {
    console.log(`${firstName} has already retired 🎉`);
    return -1;
  }

  // return `${firstName} retires in ${retirement} years`;
};

console.log(yearsUntilRetirement(1991, "Jonas"));
console.log(yearsUntilRetirement(1970, "Mike"));


// Lecture 39 - Intro to Arrays:

const friend1 = "Micheal";
const friend2 = "Steven";
const friend3 = "Peter";

const friends = ["Micheal", "Steven", "Peter"];
console.log(friends);

const y = new Array(1991, 1984, 2008, 2020);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

// SInce an array is not a primitive value it is mutable even as a const
friends[2] = "Jay";
console.log(friends);

// Illegal:
// friends = ["Bob", "alice"];

const firstName = "Jonas";
const jonas = [firstName, "schmedtmann", 2037 - 1991, "teacher", friends];
console.log(jonas);
console.log(jonas.length);

// Exercise:
const calcAge = function (birthYear) {
  return 2037 - birthYear;
};
const years = [1990, 1967, 2002, 2010, 2018];

// console.log(calcAge(years));
const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3);

const ages = [
  calcAge(years[0]),
  calcAge(years[1]),
  calcAge(years[years.length - 1]),
];
console.log(ages);


// Lecture 40 - Basic Array Operations: (Methods)

const friends = ["Micheal", "Steven", "Peter"];
const newLength = friends.push("Jay");
console.log(friends);
console.log(newLength);

friends.unshift("John");
console.log(friends);

// Remove elements
friends.pop();
console.log(friends);
const popped = friends.pop();
console.log(popped);
console.log(friends);

friends.shift();
console.log(friends);

console.log(friends.indexOf("Steven"));
console.log(friends.indexOf("Bob"));

friends.push(23);
console.log(friends.includes("Steven"));
console.log(friends.includes("Bob"));
console.log(friends.includes("23"));

if (friends.includes("Steven")) {
  console.log("You have a friend name Steven");
}


// Lecture 42 - Intro to Objects:

// Arrays -> order matters
const jonasArray = [
  "Jonas",
  "Schmedtmann",
  2037 - 1991,
  "teacher",
  ["Micheal", "Peter", "Steven"],
];

// Objects, key vakue pairs
// each key is considered a property
// Objects -> order does not matter as much
const jonas = {
  firstName: "Jonas",
  lastName: "Schmedtmann",
  age: 2037 - 1991,
  job: "teacher",
  friends: ["Micheal", "Peter", "Steven"],
};
console.log(jonas);

// Lecture 43 - Dot vs. Bracket Notation:

// Dot Notation:
console.log(jonas.lastName);

// Bracket Notation:
console.log(jonas["lastName"]);

// Bracket Notation is useful b/c it allows us to use any expression.
// i.e. "nameKey"
const nameKey = "Name";
console.log(jonas["first" + nameKey]);
console.log(jonas["last" + nameKey]);

// console.log(jonas."last" + nameKey);

const interestedIn = prompt(
  "What do you want to know about Jonas? Choose between firstName, lastName, age, job, and friends"
);
console.log(jonas[interestedIn]);

if (jonas[interestedIn]) {
  console.log(jonas[interestedIn]);
} else {
  console.log(
    "wrong request! Choose between firstName, lastName, age, job, and friends"
  );
}

jonas.location = "Portugal";
jonas["twitter"] = "@jonasschemdtmann";
console.log(jonas);

// Challenge:
// "Jonas has 3 friends, and his best friend is called Micheal"
console.log(
  `${jonas.firstName} has ${jonas.friends.length} friends, 3and his best friends is called ${jonas.friends[0]}`
);


// Lecture 44 - Object Methods:

const jonas = {
  // Holds string value
  firstName: "Jonas",
  lastName: "Schmedtmann",

  // Holds an number value
  birthYear: 1991,

  job: "teacher",

  // Holds an Array Value
  friends: ["Micheal", "Peter", "Steven"],

  // Holds a Boolean Value
  hasDriversLicense: true,

  // Unique property of an object that holds a
  // Function value

  // calcAge: function (birthYear) {
  //   return 2037 - birthYear;
  // },

  // calcAge: function () {
  //   console.log(this);
  //   return 2037 - this.birthYear;
  // },

  calcAge: function () {
    this.age = 2037 - this.birthYear;
    return this.age;
  },

  getSummary: function () {
    return `${this.firstName} is a ${this.calcAge()}-year old ${
      this.job
    }, and he has ${
      this.hasDriversLicense === true ? "a" : "no"
    } Driver's License.`;
  },
};
console.log(jonas);

// Dot Notation:
// console.log(jonas.calcAge(1991));
console.log(jonas.calcAge());

console.log(jonas.age);
console.log(jonas.age);
console.log(jonas.age);

// Bracket Notation
console.log(jonas["calcAge"]());

// Challenge
// "Jonas is a 47-year old teacher, and he has a driver's license."
console.log(jonas.getSummary());


// Lecture 46 - Iteration: The for loop

console.log("Lifting weights repetition 1 🏋️‍♂️");
console.log("Lifting weights repetition 2 🏋️‍♂️");
console.log("Lifting weights repetition 3 🏋️‍♂️");
console.log("Lifting weights repetition 4 🏋️‍♂️");
console.log("Lifting weights repetition 5 🏋️‍♂️");
console.log("Lifting weights repetition 6 🏋️‍♂️");
console.log("Lifting weights repetition 7 🏋️‍♂️");
console.log("Lifting weights repetition 8 🏋️‍♂️");
console.log("Lifting weights repetition 9 🏋️‍♂️");
console.log("Lifting weights repetition 10 🏋️‍♂️");

// for loop keeps running while condition is TRUE
for (let rep = 1; rep <= 10; rep++) {
  console.log(`Lifting weights repetition ${rep} 🏋️‍♂️`);
}


// Lecture 47 - Looping Arrays, Breaking and Continuing

const jonasArray = [
  "Jonas",
  "Schmedtmann",
  2037 - 1991,
  "teacher",
  ["Micheal", "Peter", "Steven"],
  true,
];

const types = [];

// console.log(jonasArray[0]);
// console.log(jonasArray[1]);
// console.log(jonasArray[2]);
// ...
// console.log(jonasArray[4]);

for (let i = 0; i < jonasArray.length; i++) {
  console.log(jonasArray[i], typeof jonasArray[i]);

  // Filling types array
  // types[i] = typeof jonasArray[i];
  types.push(typeof jonasArray[i]);
}

console.log(types);

const years = [1991, 2007, 1969, 2020];
const ages = [];

for (let i = 0; i < years.length; i++) {
  ages.push(2037 - years[i]);
}
console.log(ages);

// Continue - to exit the current iteration of the loop and continue to the next one
console.log("____ONLY STRING____:");
for (let i = 0; i < jonasArray.length; i++) {
  if (typeof jonasArray[i] !== "string") continue;
  console.log(jonasArray[i], typeof jonasArray[i]);
}

// Break - to completely terminate the whole loop
console.log("____Break w/ Number____:");
for (let i = 0; i < jonasArray.length; i++) {
  if (typeof jonasArray[i] === "number") break;
  console.log(jonasArray[i], typeof jonasArray[i]);
}


// Lecture 48 - Looping Backwards and Loops in Loops
const jonas = [
  "Jonas",
  "Schmedtmann",
  2037 - 1991,
  "teacher",
  ["Micheal", "Peter", "Steven"],
  true,
];

// 0, 1, ..., 4
// 4, 3, ..., 0

// Looping backwards
for (let i = jonas.length - 1; i >= 0; i--) {
  console.log(i, jonas[i]);
}

// Loop inside a loop
for (let exercise = 1; exercise < 4; exercise++) {
  console.log(`------ Starting Exercise ${exercise} ------`);

  for (let rep = 1; rep < 6; rep++) {
    console.log(`Exercise ${exercise} - Lifting weight repetition ${rep} 🏋️‍♂️`);
  }
}


// Lecture 49 - While Loop

// for (let rep = 1; rep <= 10; rep++) {
//   console.log(`Lifting weights repetition ${rep} 🏋️‍♂️`);
// }

let rep = 1;
while (rep <= 10) {
  // console.log(`WHILE: Lifting weights repetition ${rep} 🏋️‍♂️`);
  rep++;
}

let dice = Math.trunc(Math.random() * 6) + 1;
let counter = 1;

if (dice === 6) console.log("Congrats! You rolled a 6 on your first try!");

while (dice !== 6) {
  console.log(`You rolled a ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;
  counter++;
  if (dice === 6) {
    console.log(`You rolled a ${dice}`);
    console.log(`Loop is about to end, you rolled the dice ${counter} times!`);
  }
}
*/
