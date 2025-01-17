//1. GenBuzz
// Create variable myNumber
// Check that the value of the myNumber is of type number
// If myNumber is not a number, print 'This is not a number' to the console.
// If value of myNumber is a multiple of 3 print 'Gen' to the console
// If value of myNumber is a multiple of 5 print 'Buzz' to the console
// If the value of myNumber is a multiple of both 3 and 5 (ex. 15) print GenBuzz to the console
// If the value of myNumber is any other number print the value of myNumber to the console.
// Reference Codecademy lessons: Introduction- Arithmetic Opertaors, Conditional Statements lessons 3, 4, 5,and 9

//Write your code for GenBuzz below this line:

let myNumber = false;
if (typeof myNumber !== "number") {
  console.log("This is not a number.");
} else {
  if (myNumber % 15 === 0) {
    console.log("GenBuzz");
  } else if (myNumber % 3 === 0) {
    console.log("Gen");
  } else if (myNumber % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(myNumber);
  }
}

// Genbuzz function that takes myNumber as parameter:
const genBuzz = (num) => {
  if (typeof num !== "number") {
    console.log("This is not a number.");
  } else {
    if (num % 15 === 0) {
      return "GenBuzz";
    } else if (num % 3 === 0) {
      return "Gen";
    } else if (num % 5 === 0) {
      return "Buzz";
    } else {
      return num;
    }
  }
};
console.log(genBuzz(21));

//2. E-COMMERCE ITEM LIST

// Use a swtich statement to print the price of the each item in the store to the console.
// Ex. If the value of the variable is 'shoes' then, the statement "Shoes are $50" should be printed to the console.
// Reference: Codecademy lesson 10
// Items:
// Shoes- $50
// Jeans- $25
// Hat- $12
// Socks- $2
// If the variable input is not an item in the store, then print 'Invalid Item' to the console.

//Write your code for the E-Commerce item list below this line:
let item = "ssjlf";
switch (item) {
  case "shoes":
    console.log("Shoes are $50.");
    break;
  case "jeans":
    console.log("Jeans are $25.");
    break;
  case "hat":
    console.log("Hats are $15.");
    break;
  case "socks":
    console.log("socks are $2.");
    break;
  default:
    console.log("Invalid Item");
}

//3. Print a random integer (whole number) between 50(inclusive) and 100(exclusive) to the console
// Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random

//Write your code below this line:
let randomNum = Math.floor(Math.random() * 50);
console.log(randomNum);
