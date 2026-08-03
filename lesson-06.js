"use strict";

// Lesson 06 exercise: Arrays and loops
// In your exercise repository, create a branch named `lesson-06-exercise` and switch to it,
// then open `lesson-06.js`. The questions wait as comments, and the file begins with the
// strict mode line. Work beneath each question in order.

// TODO: Part one.
// Build an array of at least five menu item names. Log the whole array, the first item, the
// last item read through `length` minus 1, and the array's length.

const menu = ["Pizza", "Burger", "Pasta", "Salad", "Sushi"];
console.log(menu);
console.log(menu[0]);
console.log(menu[menu.length - 1]);
console.log(menu.length);

// TODO: Part two.
// Grow and shrink the menu with one `push`, one `unshift`, one `pop`, and one `shift`, logging
// the array after each step, and note in a comment which end of the array each method touched.

menu.push("Tacos"); // Adds to the end
console.log(menu);
menu.unshift("Soup"); // Adds to the beginning
console.log(menu);
menu.pop(); // Removes from the end
console.log(menu);
menu.shift(); // Removes from the beginning
console.log(menu);

// TODO: Part three.
// Print every menu item twice, first with a counting `for` loop that uses the index, then with
// a `for...of` loop, and add a one-line comment on when you would choose each form.

for (let i = 0; i < menu.length; i++) {
  console.log(menu[i]);
}

for (let item of menu) {
  console.log(item);
}
// Choose the counting `for` loop when you need the index (e.g., tracking position or modifying items), and choose `for...of` when you only care about the values and want cleaner, more readable code.

// TODO: Part four.
// Using the provided prices array, build display strings with `map`, keep the items under five
// euros with `filter`, and fetch the first item over ten euros with `find`, logging each
// result. Add a comment stating what `forEach` would have returned in their place, and why
// that is the well-known trap.

// * The provided prices:
const prices = [4.5, 12, 3.2, 8];
const displayStrings = prices.map((price) => `€${price.toFixed(2)}`);
console.log(displayStrings);

const underFive = prices.filter((price) => price < 5);
console.log(underFive);
const firstOverTen = prices.find((price) => price > 10);
console.log(firstOverTen);
// `forEach` would have returned `undefined` because it does not return a new array or value; it simply executes a provided function on each element of the array. This is a common trap for those expecting a return value from `forEach` like they would get from `map`, `filter`, or `find`.

// TODO: Part five.
// Loop over the provided artists array and log a two-line card for each artist using template
// literals. Then add one artist of your own invention to the data and run the file again,
// noting in a comment what you did not have to change.

// * The provided artists:
const artists = [
  "Pinkfong",
  "Adriano Celentano",
  "Asake",
  "Miyagi and Andy Panda",
  "Johnny Cash",
  "Adele",
];

for (let artist of artists) {
  console.log(`Artist: ${artist}\n-------------------`);
}
/*
 * What I did not have to change:
 * I did not have to change the logic of the loop itself (the `for...of` loop and
 * the template literal formatting), because iterating over an array automatically
 * adapts to its new length and contents when an item is added.
 */
// TODO: Part six.
// Assign the menu to a second variable, push a new item through the second name, and log both
// variables to demonstrate the shared reference. Then create a spread copy, change the copy,
// and log both lengths to prove the original survived.

const menuCopy = menu; // Shared reference
menuCopy.push("Ice Cream");
console.log(menu);
console.log(menuCopy);
const realMenuCopy = [...menu];
realMenuCopy.push("Fruit Salad");
console.log(realMenuCopy);
console.log(menu);

// TODO: Part seven.
// The counting classics. Implement FizzBuzz in full: loop from 1 to 100, printing Fizz for
// multiples of 3, Buzz for multiples of 5, FizzBuzz for both, and the number itself otherwise,
// reusing your single-number logic from the conditionals exercise. Then, with loops over the
// provided numbers array, compute the sum and find the largest value without library helpers.

// Part 7: Full FizzBuzz (1 to 100)
for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}

// * The provided numbers for the sum and the largest:
const numbers = [12, 5, 41, 8, 33, 2, 27];
let sum = 0;
let largest = numbers[0];
for (let i = 0; i < numbers.length; i++) {
  sum += numbers[i];
  if (numbers[i] > largest) {
    largest = numbers[i];
  }
}
console.log(sum);
console.log(largest);

// TODO: Part eight.
// The string classics that waited for loops. Reverse a string with a loop that walks it
// backwards by index. Count its vowels with a loop and `includes` against a vowels array. As a
// stretch, use your reverser to build a palindrome check, and test it on three words, ignoring
// case with `toLowerCase`.

// 1. Reverse a string by walking it backwards by index
function reverseString(str) {
  let reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
}

console.log(reverseString("hello")); // "olleh"

// 2. Count vowels using a loop and an array with .includes()
function countVowels(str) {
  const vowels = ["a", "e", "i", "o", "u"];
  let count = 0;

  for (let i = 0; i < str.length; i++) {
    // Convert current character to lowercase to handle uppercase vowels too
    const char = str[i].toLowerCase();
    if (vowels.includes(char)) {
      count++;
    }
  }
  return count;
}

console.log(countVowels("hello")); // 2

// 3. Stretch: Palindrome check ignoring case
function isPalindrome(word) {
  const cleanWord = word.toLowerCase();
  const reversedWord = reverseString(cleanWord);
  return cleanWord === reversedWord;
}
console.log(isPalindrome("Racecar")); // true
console.log(isPalindrome("Madam")); // true
console.log(isPalindrome("Hello")); // false
// TODO: Save deliberately, commit with a clear message, push the branch, and open a pull request
// into main.
// TODO: Submit the link to the pull request for review.
