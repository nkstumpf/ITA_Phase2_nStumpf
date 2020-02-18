/*

INSTRUCTIONS

Given an array of integers.

Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers.

If the input array is empty or null, return an empty array.

Example
For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].

*/

// My Solution:

function countPositivesSumNegatives(input) {
  var negSum = 0;
  var posCount = 0;
  var myArr = [];

  if (input === null) {
    return myArr;
  } else {
    for (i = 0; i < input.length; i++) {
      if (input[i] < 0) {
        negSum += input[i];
      } else if (input[i] > 0) {
        posCount++;
      }
    }
  }

  myArr.push(posCount, negSum);

  if (posCount === 0 && negSum === 0) {
    return [];
  } else {
    return myArr;
  }
}

// Top rated solution from codewars:

function countPositivesSumNegatives(input) {
  if (input == null || input.length == 0) return [];

  var positive = 0;
  var negative = 0;

  for (var i = 0, l = input.length; i < l; ++i) {
    if (input[i] > 0) ++positive;
    else negative += input[i];
  }

  return [positive, negative];
}