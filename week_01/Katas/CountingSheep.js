/*

Counting Sheep Challenge (8kyu)

Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

*/

// My solution

function countSheeps(arrayOfSheep) {
  var totalSheep = 0;
  // iterate through the array
  for (i = 0; i < arrayOfSheep.length; i++) {
    // check if an array item is true
    if (arrayOfSheep[i] === true) {
      // if true count it
      totalSheep += 1;
    }
  }
  return totalSheep;
}

// Top rated solution from codewars:

function countSheeps(arrayOfSheeps) {
  return arrayOfSheeps.filter(Boolean).length;
}
