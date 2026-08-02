"use strict";

// Lesson 02 exercise: Variables and data types
// In your exercise repository, create a branch named `lesson-02-exercise` and switch to it,
// then open `lesson-02.js`. The questions are inside as comments, and the file begins with the
// strict mode line. Work through the parts in order, beneath each question.

// TODO: Part one.
// Declare five variables that describe a small shop of your choosing, mixing `const` and `let`
// deliberately and naming everything in camelCase. Log each variable, and add a one-line
// comment justifying every choice between `const` and `let`.

const shopName = "The Cozy Corner Bakery";
let cookieInventory = 142;
const isOpen = true;
let dailyRevenue = 350.5;
const openingHour = 8;

console.log(shopName); // const because the shop name doesn't change
console.log(cookieInventory); // let because inventory can change
console.log(isOpen); // const because the open status is fixed for this example
console.log(dailyRevenue); // let because revenue can change daily
console.log(openingHour); // const because the opening hour is fixed

// TODO: Part two.
// Log the `typeof` result for each of your five variables, and additionally for `null` and for
// `undefined`. Note in a comment which one of these results is a famous historical bug of the
// language.

console.log(typeof shopName);
console.log(typeof cookieInventory);
console.log(typeof isOpen);
console.log(typeof dailyRevenue);
console.log(typeof openingHour);
console.log(typeof null);
console.log(typeof undefined);

// Note: typeof null returning "object" is a famous historical bug in JavaScript from its first implementation.

// TODO: Part three.
// Declare one variable without assigning it a value, and a second variable set to `null` on
// purpose. Log both values and both `typeof` results, and state the difference between the two
// kinds of nothing in one comment sentence.

let uninitializedVariable;
let nullVariable = null;

console.log(uninitializedVariable);
console.log(typeof uninitializedVariable);
console.log(nullVariable);
console.log(typeof nullVariable);

// The difference between `undefined` and `null` is that `undefined` means a variable has been declared but not assigned a value, while `null` is a value that has been explicitly assigned to a variable.

// TODO: Part four.
// Convert the three provided string values to their intended types using `Number()` and
// `Boolean()`, and convert one number of your own to a string with `String()`. Log each result
// together with its `typeof`, and note in a comment which conversion would produce `NaN` if
// the string were not a clean number.

// * The three provided string values:
const priceText = "4.50";
const countText = "12";
const flagText = "true";

const priceNumber = Number(priceText);
const countNumber = Number(countText);
const flagBoolean = Boolean(flagText);
const myNumber = 42;
const myString = String(myNumber);
console.log(priceNumber, typeof priceNumber);
console.log(countNumber, typeof countNumber);
console.log(flagBoolean, typeof flagBoolean);
console.log(myString, typeof myString);
// Note: If `priceText` were "4.50abc", `Number(priceText)` would produce `NaN`.
// TODO: Part five.
// The file ends with a short broken program that contains a reassigned `const`, an assignment
// to a variable that was never declared, and a variable read before its declaration line. Run
// it, read each error message carefully, repair all three problems, and describe each repair
// in one comment line.

// ! This broken program crashes on purpose, one error at a time.
// ! Keep it commented until you reach this part, then uncomment and repair:
// const bakeryName = "Maison Sarah";
// bakeryName = "The Corner Bakery";
// openingHour = 7;
// console.log(loafCount);
// let loafCount = 12;

let bakeryName = "Maison Sarah"; // Changed const to let to allow reassignment
bakeryName = "The Corner Bakery";

let openingHour = 7; // Declared openingHour with let to fix the assignment to an undeclared variable
let loafCount = 12; // Moved the declaration of loafCount before its usage in console.log
console.log(loafCount);

// TODO: Part six.
// Two variables, `a` and `b`, hold different values. Swap their contents using a third,
// temporary variable, and log both afterwards to prove the swap succeeded. This is the oldest
// exercise in programming, and it still earns its place.

let a = 5;
let b = 10;
let temp = a;
a = b;
b = temp;
console.log(a, b);

// TODO: Save deliberately, commit with a clear message, push the branch, and open a pull request
// into main.
// TODO: Submit the link to the pull request for review.
