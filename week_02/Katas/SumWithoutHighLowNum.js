/*

INSTRUCTIONS:

Sum all the numbers of the array (in F# and Haskell you get a list) except the highest and the lowest element (the value, not the index!).
(The highest/lowest element is respectively only one element at each edge, even if there are more than one with the same value!)

Example:

{ 6, 2, 1, 8, 10 } => 16
{ 1, 1, 11, 2, 3 } => 6

If array is empty, null or None, or if only 1 Element exists, return 0.

*/

// My Solution:

function sumArray(array) {

    function myFunc(total, num) {
        return total + num;
    }

    if (array === null) {
        return 0;
    } else if (array.length < 3) {
        return 0;
    } else {
        sorted = array.sort(function (a, b) { return a - b });
        sorted.pop();
        sorted.shift();
        sum = sorted.reduce(myFunc);
        return sum;
    }
}

// Top rated solution on codewars:

function sumArray(arr) {
    if (!arr || arr.length <= 2) return 0;

    var min, max, result;
    result = 0;
    min = max = arr[0];

    arr.forEach(function (el) {
        result += el;
        min > el ? min = el : max < el ? max = el : el;
    });

    return result - max - min;
}

