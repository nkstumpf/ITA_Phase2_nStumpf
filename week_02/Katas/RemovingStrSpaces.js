/*

INSTRUCTIONS:

Simple, remove the spaces from the string, then return the resultant string.

*/

// My Solution:

function noSpace(x) {
    var noSpace = x.split(' ');
    var myStr = "";
    for (i = 0; i < noSpace.length; i++) {
        myStr += noSpace[i];
    }
    return myStr;
}

// Top rated solution on codewars:

function noSpace(x) {
    return x.replace(/\s/g, '');
}