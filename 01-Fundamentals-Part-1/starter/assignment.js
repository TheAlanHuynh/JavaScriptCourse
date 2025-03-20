/*
JavaScript Course
Alan Huynh
Aug 31st - 2023
*/

// Assignment 1 - Values and Variables

let country = "Canada";
let continent = "North America";
let population = 38;

console.log(country, continent, population);

// Assignment 2 - Data Types

let isIsland = false;
let language;

console.log(
  typeof isIsland,
  typeof population,
  typeof country,
  typeof language
);

// Assignment 3 - let, const, var
language = "English";
// const country = "Canada";
// const continent = "North America";
// const isIsland = false;
// isIsland = true;

// Assignment 4 - Basic Operations
console.log(population / 2);
population++;
console.log(population);
console.log(population > 6);
console.log(population < 33);
let description =
  country +
  " is in " +
  continent +
  ", and its " +
  population +
  " million people speak " +
  language;
console.log(description);

// Assignment 5 - Strings and Template Literals
description = `${country} is in ${continent}, and its ${population} million people speck ${language}.`;
console.log(description);

// Assignment 6 - Taking decisions: if/else Statements
let populationDifference;
if (population > 33) {
  console.log(`${country}'s population is above average`);
} else {
  populationDifference = 33 - population;
  console.log(`${country}'s population is below average`);
}
