/*

INTRUCTIONS:

Two people bought watermelons on the store. They want to make sure the watermelons can be divided into 2 groupings of even numbers (ie: 10 can be divided into 2+8 or 4+6)
help them develop a function for sorting their watermelons 

*/

// My original solution:

// function divide(weight){
//     result = weight % 2;
//     if (result === 0 && weight !== 2) {
//       return true;
//       } else return false;
//     };

//  My refactored solution:

function divide(weight) {
  return weight % 2 === 0 && weight !== 2 ? true : false;
}

// Top rated solution on code wars:

function divide(weight) {
  return weight > 2 && !(weight % 2);
}
