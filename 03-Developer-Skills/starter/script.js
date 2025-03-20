// Remember, we're gonna use strict mode in all scripts now!
"use strict";

// const x = 23;
// if (x === 23) console.log(23);

// const calcAge = (birthYear) => 2037 - birthYear;

// console.log();

const title = "Problem Solution:";
console.log(title);

// Problem 1:
// We work for a company builfing a smart home thermometer. Our most recent task is this:"Given an array of temperature of one day, calculate the temperature amplitude. Keep in mind that sometimes there might be a sensor error."

const temperatures = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];
const temperatures2 = [4, -3, -7, -2, "error", 19, 14, 17, 15, 14, 9, 5];

// 1) Understanding the Problem
// -What is temp amplitude? Answer: difference between highest and lowest temp
// -How to compute max and min temp?
// -What's a sensor error? and what to do?

// 2) Breaking up into sub-problems
// - How to ignore errors?
// - Find max value in the temp array
// - Find min value in the temp array
// - Subtract min from max (amplitude) and return it

const calcTempAmplitude = function (temps) {
  // initalize variables, assume starting point of variables
  let max = temps[0];
  let min = temps[0];
  let amp = max - min;

  for (let i = 0; i <= temps.length; i++) {
    // create a more readable variables
    const currTemp = temps[i];

    // error check if array element is a number
    if (typeof currTemp !== "number") continue;

    if (currTemp > max) {
      max = currTemp;
      // console.log(max);
      amp = max - min;
    }
    if (currTemp < min) {
      min = currTemp;
      // console.log(min);
      amp = max - min;
    }
  }

  return amp;
};

// console.log(calcTempAmplitude(temperatures));

// Problem 2:
// Funciton should now recieve 2 arrays of temps

// 1) Understanding the problem
// - With 2 arrays, should we implement functionality twice? No, just merge the two arrays
//

// 2) Breaking up into sup-problems
// - How to merge 2 arrays?

const calcTempAmplitudeForTwoArray = function (temps1, temps2) {
  let totalArray = temps1.concat(temps2);
  // initalize variables, assume starting point of variables
  let max = totalArray[0];
  let min = totalArray[0];
  let amp = max - min;

  for (let i = 0; i <= totalArray.length; i++) {
    // create a more readable variables
    const currTemp = totalArray[i];

    // error check if array element is a number
    if (typeof currTemp !== "number") continue;

    if (currTemp > max) {
      max = currTemp;
      // console.log(max);
      amp = max - min;
    }
    if (currTemp < min) {
      min = currTemp;
      // console.log(min);
      amp = max - min;
    }
  }

  return amp;
};

// console.log(calcTempAmplitudeForTwoArray(temperatures, temperatures2));

// Problem 3: Debugging

const mearsureKelvin = function () {
  const measurement = {
    type: "temp",
    unit: "celsius",

    // C) Fix Bug
    value: Number(prompt("Degree Celsius")),
  };

  // B) Find bug
  // console.log(measurement);
  // console.table(measurement);

  // console.log(measurement.value);
  // console.warn(measurement.value);
  // console.error(measurement.value);

  const kelvin = measurement.value + 273;
  return kelvin;
};

// A) ID bug
// console.log(mearsureKelvin());
// ----------------------------------------------- //
// Coding Challenge #1

/*
  Given an array of forecasted maximum temperatures, the thermometer displays a string with these temperatures.

  Example: [17, 21, 23] will print "...17°C in 1 days ... 21°C in 2 days ... 23°C in 3 days ..."

  Create a function "printForecast" which takes in an array "arr" and logs a string like the above to the console.

  Use the problem-solving framework: Understand the problem and break it up into subproblems!
*/

// 1) Understanding the Problem:
// - Take in an array as an input
// - How to handle datatypes
// - Error checking
// - How to return the correct string
// - How to get the degrees symbol

// 2) Breaking up the Problem into sub-problems
// - transform array into string
// - transform each element to a string with °C
// - string needs to contain day (index +1)
// - add "..." between elements and start and end of the string
// - create a for loop
// - add to the string after each iteration

const testData1 = [17, 21, 23];
const testData2 = [12, 5, -5, 0, 4];

const printForecast = function (arr) {
  // initialize the return string
  let forecast = "The forcast shows that it will be ";
  // console.log(forcast);

  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] !== "number") continue;
    // forecast = forecast.concat(
    //   arr[i].toString(),
    //   "°C in ",
    //   (i + 1).toString(),
    //   " days ... "
    // );
    forecast += `${arr[i]}°C in ${i + 1} day${i + 1 > 1 ? "s" : ""} ... `;
  }

  return forecast;
};

console.log(printForecast(testData1));
console.log(printForecast(testData2));
