/*

INSTRUCTIONS:

Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.

invert([1,2,3,4,5]) == [-1,-2,-3,-4,-5]
invert([1,-2,3,-4,5]) == [-1,2,-3,4,-5]
invert([]) == []
You can assume that all values are integers. Do not mutate the input array/list

*/

// My Solution:

function invert(array) {
    var myArr = [];

    function checkVal(item) {
        if (Math.sign(item) === 1) {
            console.log("positive number");
            myArr.push(-Math.abs(item));
        } else if (Math.sign(item) === -1) {
            console.log("negative number");
            myArr.push(Math.abs(item));
        } else if (Math.sign(item) === 0) {
            console.log("zero");
            myArr.push(item);
        }
    }

    array.forEach(checkVal);

    return myArr;
}

// Top rated solution on codewars:
// Using MAP and TERNARY OPERATOR

// The map() method creates a new array with the results of calling a function for every array element.
// The map() method calls the provided function once for each element in an array, in order.

function invert(array) {
    return array.map(x => x === 0 ? x : -x);
}