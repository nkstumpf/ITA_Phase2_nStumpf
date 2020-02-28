/*

INSTRUCTIONS:

Given two integers a and b, which can be positive or negative, find the sum of all the numbers between including them too and return it. If the two numbers are equal return a or b.

Note: a and b are not ordered!

Examples
GetSum(1, 0) == 1   // 1 + 0 = 1
GetSum(1, 2) == 3   // 1 + 2 = 3
GetSum(0, 1) == 1   // 0 + 1 = 1
GetSum(1, 1) == 1   // 1 Since both are same
GetSum(-1, 0) == -1 // -1 + 0 = -1
GetSum(-1, 2) == 2  // -1 + 0 + 1 + 2 = 2

*/

// MY Solution:

function getSum(a, b) {

    // if a && b = 0 return 0
    // else take the smaller of the two numbers...
    // add 1 to that number and add it to itself until it equals the greater number

    var x, dif
    var result = 0;

    if (a === 0 && b === 0) {
        return 0;

    } else if (a === b) {

        return a;

    } else if (a > b) {
        x = b;
        dif = a - b;
        console.log("a > b")
        for (i = 0; i < dif; i++) {
            console.log(x);
            x++
            result += x;
            console.log(result);
        }

        result += b;

    } else if (a < b) {
        x = a;
        dif = b - a;
        console.log("a < b");
        for (i = 0; i < dif; i++) {
            console.log(x);
            x++
            result += x;
            console.log(result);
        }
        result += a;
    }

    return result;

}