"use strict";

// Lesson 07 exercise: Objects
// In your exercise repository, create a branch named `lesson-07-exercise` and switch to it,
// then open `lesson-07.js`. The questions wait as comments, and the file begins with the
// strict mode line. Work beneath each question in order.

// TODO: Part one.
// Model a single menu item as an object with at least four properties of mixed types,
// including one boolean. Log two properties with dot notation, then log one property through
// bracket notation with the key held in a variable, and note in a comment why the brackets
// were required in that case.

const Item = {
  name: "Caesar Salad",
  price: 12.99,
  vegetarian: true,
  category: "Salad",
  describe: function () {
    return `The ${this.name} is a ${this.category} that costs $${this.price}. Vegetarian: ${this.vegetarian}.`;
  },
};

console.log(Item.name);
console.log(Item.price);
const property = "category";
console.log(Item[property]); // Brackets required because the variable `property` contains the key name as a string

// TODO: Part two.
// Give the item a `describe` method that returns one sentence built from the object's own
// properties through `this`, and log the result of calling it.

console.log(Item.describe());

// TODO: Part three.
// Build an array of at least five menu item objects, and walk it with `for...of`, logging one
// formatted line per item.

const menuItems = [
  {
    name: "Margherita Pizza",
    price: 8.99,
    vegetarian: true,
    category: "Pizza",
  },
  {
    name: "Pepperoni Pizza",
    price: 9.99,
    vegetarian: false,
    category: "Pizza",
  },
  { name: "Caesar Salad", price: 7.99, vegetarian: true, category: "Salad" },
  {
    name: "Chicken Wings",
    price: 10.99,
    vegetarian: false,
    category: "Appetizer",
  },
  {
    name: "Veggie Burger",
    price: 11.99,
    vegetarian: true,
    category: "Main Course",
  },
];

for (const item of menuItems) {
  console.log(`${item.name}: $${item.price}`);
}

// TODO: Part four.
// Put the callback methods to work on the data: log the names of all vegetarian items by
// combining `filter` and `map`, and fetch the first item cheaper than three euros with `find`.
// Add a comment stating what `find` returns when nothing matches.

// 1. Log the names of all vegetarian items using filter and map
const vegetarianItems = menuItems.filter((item) => item.vegetarian); //item.vegetarian evaluates to true for vegetarian items
vegetarianItems.map((item) => console.log(item.name));
const cheapItem = menuItems.find((item) => item.price < 3); // Returns undefined if no item is found
console.log(cheapItem); // This will log undefined since no item is cheaper than three euros

// TODO: Part five.
// Take one menu item and log its keys, its values, and finally every pair through a `for...of`
// loop over its entries with a destructured pair, formatted as the key, a colon in the output
// text, and the value.

const firstItem = menuItems[0];
console.log(Object.keys(firstItem));
console.log(Object.values(firstItem));

for (const [key, value] of Object.entries(firstItem)) {
  console.log(`${key}: ${value}`);
}

// TODO: Part six.
// Assign one item to a second variable, change the price through the second name, and log the
// first to demonstrate the shared reference. Then build a spread copy that overrides only the
// price, and log both objects to prove they now differ in exactly that property.

const secondItem = firstItem; // Shared reference
secondItem.price = 15.99; // Change the price through the second variable
console.log(firstItem.price); // Logs 15.99, demonstrating shared reference

const spreadCopy = { ...firstItem, price: 9.99 }; // Spread copy with overridden price
console.log(firstItem.price); // Logs 15.99
console.log(spreadCopy.price); // Logs 9.99, proving they now differ in the price property

// TODO: Part seven.
// As a stretch, build the classic word frequency counter: split the provided sentence into
// words and walk them with a loop, using each word as a bracket-notation key on a counter
// object and adding one per sighting. Log the finished counter, and if the sort extension
// caught your interest, log its entries ordered so that the most frequent word comes first.

// * The provided sentence for the word frequency counter:
const sentence =
  "the quick brown fox jumps over the lazy dog the fox sleeps and the dog dreams";
const words = sentence.split(" ");
console.log(words);

const wordCounter = {};

for (const word of words) {
  if (wordCounter[word]) {
    wordCounter[word] += 1; // Increment count if word already exists
  } else {
    wordCounter[word] = 1; // Initialize count if word doesn't exist
  }
}
console.log(wordCounter);
// TODO: Save deliberately, commit with a clear message, push the branch, and open a pull request
// into main.
// TODO: Submit the link to the pull request for review.
