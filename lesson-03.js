"use strict";

// Lesson 03 exercise: Strings and numbers
// In your exercise repository, create a branch named `lesson-03-exercise` and switch to it,
// then open `lesson-03.js`, where the questions wait as comments. Work beneath each question
// in order.

// TODO: Part one.
// Declare variables for a shop name, an opening hour, and a closing hour, then log one
// welcoming sentence built as a single template literal that uses all three.

let shopName = "Maison Sarah";
let openingHour = "8:00";
let closingHour = "18:00";

console.log(
  `Welcome to ${shopName}! We are open from ${openingHour} to ${closingHour}.`,
);

// TODO: Part two.
// The file provides a messy string with surplus spaces at both ends, the wrong case, and one
// word that needs replacing. Apply the methods from this lesson, chained or in sequence, to
// log the cleaned version, and add a comment naming each method you used and the job it
// performed.

// * The provided messy string:
const messy = "   Maison   Sarah, fresh bread daily   ";

let clean = messy.trim().split(/\s+/).join(" ");
console.log(clean);

// Methods used and their jobs:
// 1. `trim()` - removes whitespace from both ends of the string.
// 2. `split(/\s+/)` - splits the string into an array of words, using one or more whitespace characters as the delimiter.
// 3. `join(" ")` - joins the array of words back into a single string, with a single space between each word.

// TODO: Part three.
// Using the provided product string, log its length, the position at which a given word
// begins, and a slice containing exactly that word. Then split the provided comma-separated
// list and log the resulting pieces.

// * The provided product string and comma-separated list:
const product = "Sourdough Loaf, whole grain";
const flavorList = "rye,spelt,wheat,olive";

console.log(product.length); // Log the length of the product string
console.log(product.indexOf("whole")); // Log the position of the word "whole"
console.log(product.slice(16, 21)); // Log the slice containing the word "whole"
console.log(flavorList.split(",")); // Log the array of flavors

// TODO: Part four.
// From the net price and tax rate in the file, calculate the final price and log it inside a
// template literal, formatted to two decimal places. Add a comment explaining why the
// formatting step must come last.

// * The provided net price and tax rate:
const netPrice = 4.0;
const taxRate = 0.07;

const finalPrice = netPrice * (1 + taxRate);
console.log(`The final price is $${finalPrice.toFixed(2)}.`);
// The formatting step must come last because .toFixed() returns a string instead of a number,
// which would break any further mathematical calculations if performed before finishing math.

// TODO: Part five.
// Using the random recipe from this lesson, log a random whole number from 1 to 6. Then adapt
// the recipe to produce a number from 10 to 20, and explain your adaptation in a comment.

const diceRoll = Math.floor(Math.random() * 6) + 1;
console.log(diceRoll); // Log a random whole number from 1 to 6

const randomNumber = Math.floor(Math.random() * 11) + 10;
console.log(randomNumber); // Log a random whole number from 10 to 20
// Adaptation explanation: I changed the multiplier from 6 to 11 to create a range of 0 to 10,
// and then added 10 to shift the range up to 10 to 20.

// TODO: Part six.
// Open the MDN String reference, choose one method this lesson did not cover, and use it
// correctly on a string of your choice. In a comment, cite the method's name and describe what
// it does in one sentence of your own words.

const banner = "Open";
const repeatedBanner = banner.repeat(3);

console.log(repeatedBanner);

// Method: repeat() - Creates and returns a new string by repeating the original string a specified number of times.

// TODO: Part seven.
// Two classic exercises close the lesson. First, build a username generator: from a first name
// and a last name held in variables, produce a lowercase username in the pattern of first
// initial followed by full last name, such as mmustermann. Second, write a mad-libs story:
// declare four variables, an adjective, a noun, a verb, and a place, and log one short,
// ridiculous story built from a single template literal that uses all four.

let firstName = "Max";
let lastName = "Mustermann";
let username = (firstName[0] + lastName).toLowerCase();
console.log(username); // Log the generated username

let adjective = "silly";
let noun = "cat";
let verb = "jumps";
let place = "moon";

console.log(
  `While shopping at the local ${place}, a ${adjective} ${noun} suddenly appears in the aisle and loudly ${verb} at the startled manager.`,
);
// TODO: Save deliberately, commit with a clear message, push the branch, and open a pull request
// into main.
// TODO: Submit the link to the pull request for review.
