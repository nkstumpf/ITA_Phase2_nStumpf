/*

INSTRUCTIONS:

Clock shows 'h' hours, 'm' minutes and 's' seconds after midnight.

Your task is to make 'Past' function which returns time converted to milliseconds.

Example:
past(0, 1, 1) == 61000
Input constraints: 0 <= h <= 23, 0 <= m <= 59, 0 <= s <= 59

*/

// My solution:

function past(h, m, s) {

    var seconds = 0;

    seconds += h * 3600;
    seconds += m * 60;
    seconds += s;

    return seconds * 1000;

};