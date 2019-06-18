// Write the below function in five different forms. i.e
// 1. Function Decleration
// 2. Function Expression
// 3. Arrow Function Without Curly Braces
// 4. Arrow Function With Curly Braces
// 5. Function Invocation

// Example Start
/**
 * Converts a number a string.
 * @param {number} n
 * @return {string} the number as a string
 */

//Function Decleration
function convertToString(n) {
  return String(n);
}

// Function Expression
let convertToString1 = function(n) {
  return String(n);
};

// Arrow Function
let convertToString = n => String(n);

// Arrow Function With Curly Bracket

let convertToString = n => {
  return String(n);
};

// Function Invocation

convertToString(21); // "21"

// Example End

/**
 * Adds one to a given number.
 * @param {number} n
 * @return {number}
 */
// Function Decleration
function addOne(n) {
  return n + 1;
}
// Funtion Expression
let addOne = function(n) { 
  return n + 1;
};

// Arrow Function
let addOne = n =>  n + 1;;

// Arrow Function With Curly Bracket
let addOne = n => {
  return n + 1;
};

// Function Invocation
addOne(2); // 3

/**
 * Subtracts one from a given number.
 * @param {number} n
 * @return {number}
 */
// Function Decleration
function subOne(n) {
  return n - 1;
}

// Function Expression
let subOne = function(n) {
  return n - 1;
}

// Arrow Function
let subOne = (n) => n - 1;

// Arrow Function With Curly Brackets
let subOne = (n) => {
  return n - 1;
}

// Function Invocation
subOne(2, 1); // 1

/**
 * Adds two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the sum
 */
// Function Decleration
function addition(x, y) {
  return x + y;
}

// Function Expression
let addition = function(x, y) {
  return x + y;
}

// Arrow Function
let addition = (x, y) =>  x + y;

// Arrow Function With Curly Brackets
let addition = (x, y) => {
  return x + y;
}

// Function Invocation
addition(2, 4); // 6

/**
 * Subtracts the second number from the first.
 * @param {number} x
 * @param {number} y
 * @return {number} the difference
 */
// Function Decleration
function subtract(x, y) {
  return x - y;
}

// Function Expression
let subtract = function(x, y) {
  return x - y;
}

// Arrow Function
let subtract = (x, y) =>  x - y;

// Arrow Function With Curly Brackets
let subtract = (x, y) => {
  return x - y;
}

// Function Invocation
subtract(4, 2); // 2

/**
 * Multiplies two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the product
 */
// Function Decleration
function multiply(x, y) {
  return x * y;
}

// Function Expression
let multiply = function(x, y) {
  return x * y;
}

// Arrow Function
let multiply = (x, y) =>  x * y;

// Arrow Function With Curly Brackets
let multiply = (x, y) => {
  return x * y;
}

// Function Invocation
multiply(6, 2); // 12 

/**
 * Divides the first number by the second.
 * @param {number} x
 * @param {number} y
 * @return {number} the quotient
 */
// Function Decleration
function division(x, y) {
  return x / y;
}
// Function Expression
let division = function(x, y) {
  return x / y;
}
// Arrow Function
let division = (x, y) =>  x / y;

// Arrow Function With Curly Bracket
let division = (x, y) => {
  return x / y;
}

// Function Invocation
division(4, 2);

/**
 * Multiplies a number by itself.
 * @param {number} x, number to be squared
 * @return {number} squared
 */
// Function Decleration
function multiply(x) {
  return x * x;
}

// Function Expression
let multiply = function(x) {
    return x * x;
}

// Arrow Function
let multiply = x => x * x;


// Arrow Function With Curly Bracket
let multiply = x => {
  return x * x;
}

// Function Invocation
multiply(4); // 16

/**
 * Performs a mathematical operation on two numbers.
 * Also prints out the equation: (i.e.) "1 + 5 = 6" or "8 / 2 = 4".
 * @param {string} operation "add", "subtract", "multiply", or "divide"
 * @param {number} x
 * @param {number} y
 * @return {number} the result
 */
// Function Decleration
function math(operation, x, y) {
  switch(operation) {
    case 'add':
      return x + y;
      case 'subtract':
      return x - y;
    case 'multiply':
      return x * y;
    case 'divide':
      return x / y;
    default:
      return `Please give one argument for operation and or two digits. For ex: math( 'add', 4, 5 )`;
  }
}

// Function Expression
let math = function(operation, x, y) {
  switch(operation) {
    case 'add':
      return x + y;
     case 'subtract':
      return x - y;
    case 'multiply':
      return x * y;
    case 'divide':
      return x / y;
    default:
      return `Please give one argument for operation and or two digits. For ex: math( 'add', 4, 5 )`;
  }
}

// Arrow Function With Curly Bracket
let math = (opertaion, x, y) => {
  switch(operation) {
    case 'add':
      return x + y;
     case 'subtract':
      return x - y;
    case 'multiply':
      return x * y;
    case 'divide':
      return x / y;
    default:
      return `Please give one argument for operation and or two digits. For ex: math( 'add', 4, 5 )`;
  }
}

// Function Invocation
math( 'add', 4, 2 ); // 6

/**
 * Returns true if `a` is greater than `b`.
 * @param {number} a
 * @param {number} b
 * @return {boolean} `a` is larger than `b`
 */
// Function Decleration
function greater(a, b) {
  return a > b;
}

// Function Expression
let greater = function(a, b) {
  return a > b;
}

// Arrow Function
let greater = (a, b) => a > b;

// Arrow Function With Curly Bracket
let greater = (a, b) => {
  return a > b;
}
// Function Invocation
greater(4, 2); // 4

/**
 * Returns true if `a` is less than `b`.
 * @param {number} a
 * @param {number} b
 * @return {boolean} `a` is smaller than `b`
 */
// Function Decleration
function lesser(a, b) {
  return a < b;
}

// Function Expression 
let lesser = function(a, b) {
  return a < b;
}

// Arrow Function
let lesser = (a, b) => a < b;

// Arrow Function With Curly Bracket
let lesser = (a, b) => {
  return a < b;
}

// Function Invocation
lesser(2, 3); // 2

/**
 * Returns true if `a` and `b` are equal.
 * @param {number} a
 * @param {number} b
 * @return {boolean} the numbers are equal
 */
// Function Decleration
function equal(a, b) {
  return a === b;
}

// Function Expression
let equal = function(a, b) {
  return a === b;
}

// Arrow function
let equal = (a, b) => a === b;

// Arrow Function With Curly Bracket
let equal = (a, b) => {
  return a === b;
}

// Function Invocation
equal(4, 2); // false

/**
 * Returns the smallest value of two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the smallest number
 */
// Function Decleration
function smallest(x, y) {
  if (x < y) {
    return x;
  }
  else if (y < x) {
    return y;
  }
  else {
    return 'Both arguments should not be same'
  }
}

// Function Expression
let smallest = function(x, y) {
  if (x < y) {
    return x;
  }
  else if (y < x) {
    return y;
  }
  else {
    return 'Both arguments should not be same'
  }
}

// Arrow Function With Curly Bracket
let smallest = (x, y) => {
  if (x < y) {
    return x;
  }
  else if (y < x) {
    return y;
  }
  else {
    return 'Both arguments should not be same'
  }
}

// Function Invocation
smallest(4, 2); // 2

/**
 * Returns the largest value of two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the largest number
 */
// Function Decleration
function largest(x, y) {
  if (x > y) {
    return x;
  }
  else if (y > x) {
    return y;
  }
  else {
    return 'Both arguments should not be same';
  }
}

// Function Expression
let largest = function(x, y) {
  if (x > y) {
    return x;
  }
  else if (y > x) {
    return y;
  }
  else {
    return 'Both arguments should not be same';
  }
}

// Arrow Function With Curly Bracket
let largest = (x, y) => {
  if (x > y) {
    return x;
  }
  else if (y > x) {
    return y;
  }
  else {
    return 'Both arguments should not be same';
  }
}

// Function Invocation
largest(4, 2); // 4

/**
 * Returns true if `n` is even.
 * @param {number} n
 * @return {boolean} the number is even
 */
// Function Decleration
function even(n) {
  if( n % 2 == 0) {
    return true;
  }
  else {
    return false;
  }
}

// Function Expression
let even = function(n) {
  if( n % 2 == 0) {
    return true;
  }
  else {
    return false;
  }
}
// Arrow Function 
let even = (n) => ( n % 2 == 0) ? true : false;

// Arrow Function With Curly Bracket
let even = (n) => {
  if( n % 2 == 0) {
    return true;
  }
  else {
    return false;
  }
}

// Function Invocation
even(4); // true

/**
 * Returns true if `n` is odd.
 * @param {number} n
 * @return {boolean} the number is odd
 */
// Function Decleration
function odd(n) {
  if( n % 2 !== 0) {
    return true;
  }
  else {
    return false;
  }
}

// Function Expression
let odd = function(n) {
  if( n % 2 !== 0) {
    return true;
  }
  else {
    return false;
  }
}
// Arrow Function
let odd = (n) => ( n % 2 !== 0) ? true : false;

// Arrow Function With Curly Bracket
let odd = (n) => {
  if( n % 2 !== 0) {
    return true;
  }
  else {
    return false;
  }
}

// Function Invocation
odd(3); // true

/**
 * Returns a letter grade.
 * "A": 90-100%
 * "B": 80-89%
 * "C": 70-79%
 * "D": 60-69%
 * "F": 0-59%
 * @param {number} score
 * @param {number} total maximum possible score
 * @return {string} the score represented as a letter grade
 */
// Function Decleration
function gradeCheck(score, total) {
  if (score === 90 && total === 100) {
    return 'A';
  }
  else if (score === 80 && total === 89) {
    return 'B';
  }
  else if (score === 70 && total === 79) {
    return 'C';
  }
  else if (score === 60 && total === 69) {
    return 'D';
  }
  else if (score === 0 && total === 59) {
    return 'F';
  }
  else {
    return 'Please invoke with both arguments and both should be between the renge of 0 to 100. For Ex: gradeCheck(60, 69);';
  }
}

// Function Expression
let gradeCheck = function(score, total) {
  if (score === 90 && total === 100) {
    return 'A';
  }
  else if (score === 80 && total === 89) {
    return 'B';
  }
  else if (score === 70 && total === 79) {
    return 'C';
  }
  else if (score === 60 && total === 69) {
    return 'D';
  }
  else if (score === 50 && total === 59) {
    return 'F';
  }
  else {
    return 'Please invoke with both arguments and both should be between the renge of 0 to 100. For Ex: gradeCheck(60, 69);';
  }
}

// Arrow Function With Curly Brackets
let gradeCheck = (score, total) => {
  if (score === 90 && total === 100) {
    return 'A';
  }
  else if (score === 80 && total === 89) {
    return 'B';
  }
  else if (score === 70 && total === 79) {
    return 'C';
  }
  else if (score === 60 && total === 69) {
    return 'D';
  }
  else if (score === 50 && total === 59) {
    return 'F';
  }
  else {
    return 'Please invoke with both arguments and both should be between the renge of 0 to 100. For Ex: gradeCheck(60, 69);';
  }
}

// Function Invocation
gradeCheck(60, 69); // "D"

/**
 * Joins two strings with a space.
 * @param {string} word1
 * @param {string} word2
 * @return {string} joined the words joined with a space
 */
// Function Decleration
function joinString(word1, word2) {
  return word1+" "+word2;
}

// Function Expression
let joinString = function(word1, word2) {
  return word1+" "+word2;
}

// Arrow function
let joinString = (word1, word2) => word1+" "+word2;

// Arrow Function With Curly Brackets
let joinString = (word1, word2) => {
  return word1+" "+word2;
}

// Function Invocation
joinString( "Para", "Game" ); // Para Game