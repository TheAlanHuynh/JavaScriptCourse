/* 
// Declaring a variable:
let js = "amazing";

// How to access the console to output data:
console.log(40 + 8 + 23 - 10);

console.log("Jonas");
console.log(23);

// Declaring a variable then outputting the variable:
let firstName = "Matilda";
console.log(firstName);
console.log(firstName);
console.log(firstName);

// Conventions and Rules in naming variables:
// CamelCase Notation - whenever you have multiple words,
// the first word is lowercase then following words
// are uppercase. i.e.: 'firstNameOfPlayer'

// Illegal Variable name:
// let 3years = 3;
// b/c it is illegal to start a variable w/ a number

// Variables can only contain:
// numbers, letters, underscores, or dollar signs
let jonas_matilda = "JM";
let $function = 27;

// We cannot use reserved keywords. i.e. 'new'
// let new = "Jonas";
let person = "Jonas";

// Variables that use all uppercase are for static final constants
let PI = 3.1415;

let myFirstJob = "Coder";
let myCurrentJob = "Teacher";

let job1 = "programmer";
let job2 = "teacher";

console.log(myFirstJob);

// Lecture 11:
let javaScriptIsFun = true;
console.log(javaScriptIsFun);

// console.log(typeof true);
console.log(typeof javaScriptIsFun);
// console.log(typeof 23);
// console.log(typeof "Jonas");

// Dynamic Typing:
// Once a variable has been declared at least once,
// you do NOT need to use 'let' again.
javaScriptIsFun = "YES";
console.log(typeof javaScriptIsFun);

// Undefined Variable
let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(typeof year);

// Bug:
console.log(typeof null);



// lecture 12:

// declaring a variable with 'let'
// 'let' is great for declaring empty or mutate variables
let age = 30;

// reassigning/mutate variable
age = 31;

// 'const' key word is used to declare variables that are not meant to change "inmutable"
// therefore variables that are declared const cannot be changes or be empty
const birthYear = 1991;
// birthYear = 1991;
// const job;

// 'var' key word should be completely avoided. Legacy key word
var job = "programmer";
job = "teacher";

// You dont even need to declare variables *Bad Practice*
// lastName = "Schmedtmann";
// console.log(lastName);



// Lecture 13: Basic Operators

const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
// 2**3 means 2 power of 3 = 2 * 2 * 2

const firstName = "Jonas";
const lastName = "Schmedtmann";
console.log(firstName + " " + lastName);

// Assignment operator
let x = 10 + 5; // 15
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4 = 100
x++; // x = x + 1 = 101
x--; //x = x - - 1 = 100
console.log(x);

// Comparision operators
console.log(ageJonas > ageSarah); // >, <, >=, <=
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;

console.log(now - 1991 > now - 2018);


// Lecture 14:

const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;

console.log(now - 1991 > now - 2018);

let x, y;
x = y = 25 - 10 - 5; // x = y = 10
console.log(x, y);
const averageAge = (ageJonas + ageSarah) / 2;
console.log(ageJonas, ageSarah, averageAge);



// Lecture 17: Strings and Template Literals

const firstName = "Alan";
const job = "Professional Student";
const birthYear = 1995;
const year = 2023;

// Type Conversion - Example
const alan =
  "I'm " + firstName + ", a " + (year - birthYear) + " years old " + job + "!";
console.log(alan);

// Template Literal example: (must use a back-tick [` `])
const alanNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`;
console.log(alanNew);

console.log(`Just a regular string...`);

// template literal for multi-line string

// Before:
console.log(
  "String with \n\
multiple \n\
lines"
);

// W/ Template Strings
console.log(`String
multiple
lines`);



// Lecture 18: Taking Decisions: if/else Statements

// If else control structure:
// if () {

// } else {

// }

const age = 15;
// const isOldEnough = age >= 18; // condition

if (age >= 18) {
  console.log("Sarah can start driving license 🚗");
} else {
  const yearsLeft = 18 - age;
  console.log(`Sarah is too young, Wait another ${yearsLeft} years :)`);
}

let century;
const birthYear = 1995;
if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}

console.log(century);


// Lecture 20 - Type Conversion and Coercion
// Type Conversion - When you manually convert one type to another
// Typr Coercion - JavaScript automatically converts one type to another

// Converting Strings into numbers
const inputYear = "1991";
console.log(Number(inputYear), inputYear); // 1991 '1991'
console.log(inputYear + 18); // '199181'
console.log(Number(inputYear) + 18); // 2009
console.log(inputYear); // '1991'

console.log(Number("jonas")); // NaN - Not a Number
console.log(typeof NaN); // invalid number

// Converting Numbers to strings
console.log(String(23), 23);

// Type Coercion:
console.log("I am " + 23 + " years old"); //type string
console.log("I am " + "23" + " years old"); // type string
console.log("23" + "10" + 3); // type string
console.log("23" - "10" - 3); // type number
console.log("23" * 2); // type number

let n = "1" + 1; // "1" + 1 = "11"
n = n - 1; // "11" - 1 = 10
console.log(n); // 10


// Lecture 21 - Truthy and Falsy values

// 5 Falsy Values: 0, "", undefined, null, NaN
//  The values above WILL be converted to a false boolean value upon conversion

// Type conversion is not typically used for booleans
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean(""));
console.log(Boolean({}));
console.log(Boolean("Jonas"));
console.log(Boolean(NaN));

// type coercion of booleans
const money = 100;
if (money) {
  console.log("Don't spend it all ;)");
} else {
  console.log("You should get a job!");
}

let height = 0;
if (height) {
  console.log("YAY! Height is defined");
} else {
  console.log("Height is undefined.");
}


// Lecture 22 - Equality Operators

const age = "18";
if (age === 18) console.log("You just became an Adult! (Strict)");
if (age == 18) console.log("You just became an Adult! (Loose)");
// "===" - Strict Equality: Comparison *No Type Coercion*
// "==" - Loose Equality: Comparison with type Coercion

const favourite = Number(prompt("What's your favourite Number?"));
console.log(favourite);
console.log(typeof favourite);

if (favourite === 23) {
  console.log("Cool! 23 is an amazing number!");
} else if (favourite === 7) {
  console.log("7 is also a cool number");
} else if (favourite === 9) {
  console.log("9 is also a cool number");
} else {
  console.log("Number is not 23 or 7 or 9");
}

if (favourite !== 23) console.log("Why not 23?");


// Lecture 24 - Logic Operations

const hasDriversLicense = true; // A
const hasGoodVision = true; // B

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

const shouldDrive = hasDriversLicense && hasGoodVision;

// if (shouldDrive) {
//   console.log("Sarah is able to drive!");
// } else {
//   console.log("Someone else should drive...");
// }

const isTired = true; // C
console.log(hasDriversLicense && hasGoodVision && isTired);

if (hasDriversLicense && hasGoodVision && !isTired) {
  console.log("Sarah is able to drive!");
} else {
  console.log("Someone else should drive...");
}


// Lecture 26 - The Switch Statement

const day = "monday";

switch (day) {
  case "monday": // day === "monday"
    console.log("Plan course structure");
    console.log("Go to coding meetup");
    break;
  case "tuesday":
    console.log("Perpare theory videos");
    break;
  case "wednesday":
  case "thursday":
    console.log("Write code examples");
    break;
  case "friday":
    console.log("Record Videos");
    break;
  case "saturday":
  case "sunday":
    console.log("Enjoy the weekend :D");
    break;
  default:
    console.log("Not a valid day!");
}

if (day === "monday") {
  console.log("Plan course structure");
  console.log("Go to coding meetup");
} else if (day === "tuesday") {
  console.log("Perpare theory videos");
} else if (day === "wednesday" || day === "thursday") {
  console.log("Write code examples");
} else if (day === "friday") {
  console.log("Record Videos");
} else if (day === "saturday" || day == "sunday") {
  console.log("Enjoy the weekend :D");
} else {
  console.log("Not a valid day!");
}


// Lecture 27 - Statements and Expressions

// Expression: A piece of code that produces a value
// Examples:
3 + 4;
1991;
true && false && !false;

// Statement: bigger piece of code that is executed and which is does not produce a value on itself

if (23 > 10) {
  const str = "23 is bigger";
}

// Statements and Expressions exist. Expressions produce values and statements are like full sentences that translate our actions

// The difference between a statement and an expression matters in JavaScript b/c JavaScript expects statements and expressions in different areas.
// I.E. template literals only can insert expressions

console.log(`I'm ${2037 - 1991} years old.`);
// console.log(`I'm ${2037 - 1991} years old. ${if (23 > 10) {
//   const str = "23 is bigger";
// }}`);


// Lecture 28 - The Conditional (Ternary) Operator

const age = 23;

age >= 18
  ? console.log("I like to drink wine 🍷")
  : console.log("I like to drink water 💧");

const drink = age >= 18 ? "wine 🍷" : "water 💧";
console.log(drink);

let drink2;
if (age >= 18) {
  drink2 = "wine 🍷";
} else {
  drink2 = "water 💧";
}
console.log(drink2);

// Template literal works here b/c they are all expressions
console.log(`I like to drink ${age >= 18 ? "wine 🍷" : "water 💧"}`);
*/
