/*

INSTRUCTIONS:

The two oldest ages function/method needs to be completed. It should take an array of numbers as its argument and return the two highest numbers within the array. The returned value should be an array in the format [second oldest age, oldest age].

The order of the numbers passed in could be any order. The array will always include at least 2 items.

For example:

twoOldestAges( [1, 2, 10, 8] ) // should return [8, 10]

*/

// My Solution:


// return the two oldest/oldest ages within the array of ages passed in.
function twoOldestAges(ages) {
    var x = ages.sort(function (a, b) { return a - b });
    result = [];
    result.push(x[x.length - 2], x[x.length - 1]);
    return result;
}

// Top rated solutuon:

function twoOldestAges(ages) {
    return ages.sort(function (a, b) { return a - b; }).slice(-2);
}