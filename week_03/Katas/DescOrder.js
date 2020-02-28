/*

INSTRUCTIONS:

Your task is to make a function that can take any non-negative integer as a argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

Examples:
Input: 21445 Output: 54421

Input: 145263 Output: 654321

Input: 123456789 Output: 987654321

*/

// My Solution:

function descendingOrder(n) {
    if (n < 10) {
        return n
    }

    var myStr = "";
    var myArr = Array.from(n.toString()).sort(function (a, b) { return b - a });

    for (i = 0; i < myArr.length; i++) {
        myStr += myArr[i];
    }

    return parseInt(myStr);
}

// Top rated solution:
// USING: .split .sort .reverse .join

function descendingOrder(n) {
    return parseInt(String(n).split('').sort().reverse().join(''))
}