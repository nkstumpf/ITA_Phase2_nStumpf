/*

INSTRUCTIONS:

Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.

For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.

[10, 343445353, 3453445, 3453545353453] should return 3453455.

*/

// My solution:

function sumTwoSmallestNumbers(numbers) {
  let x = numbers.sort((a, b) => a - b);
  return x[0] + x[1];
}

// Top rated solution on codewars:

// sort an array of int from lowest to highest
function sortNumber(a, b) {
  return a - b;
}

numArray.sort(sortNumber);

// In ES6, you can simplify this with arrow functions:
numArray.sort((a, b) => a - b); // For ascending sort
numArray.sort((a, b) => b - a); // For descending sort
