'use strict';

// ES6 destructing assignment for the runtime arguments to intersect
let [ , , arr1, arr2] = process.argv;

// Convert input strings to arrays
arr1 = JSON.parse(arr1);
arr2 = JSON.parse(arr2);

// Throw error if both processed strings are not arrays
// ES6 preferred type inference for arrays is the static method Array.isArray()
if (!Array.isArray(arr1) || !Array.isArray(arr2)) throw new TypeError("One or more args not of type Array");

// Main intersect function
// Correctly handles all primitive types and (recursively) all arrays of primitive types 
// If either array contains objects of any other type, they will be considered equal if and only if they refer to the same object (see: object comparisons)
// Runs in O(n * m) time, where n and m are the total number of primitive values in arr1 and arr2 respectively
function intersect(arr1, arr2) {
  let result = [];

  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (Array.isArray(arr1[i]) && Array.isArray(arr2[j])) {

        // If the two arrays are equal in length (Condition 1) AND the union set is the same size (Condition 2)
        // Condition 1: not only a requirement for array equality, but also saves an expensive recursive call (see: short-circuit evaluation)
        // Condition 2: if the intersection contains the same number of elements as the (equal length) member sets, the arrays represent identical sets
        if (arr1[i].length === arr2[j].length && intersect(arr1[i], arr2[j]).length === arr1[i].length) 
          result.push(arr1[i]);

      // Type-strict equality ensures that if arr1[i] OR arr2[i] is of a reference type, the equality fails
      } else if (arr1[i] === arr2[j]) result.push(arr1[i]);
    }
  }

  return result;
}

console.log(intersect(arr1, arr2));

// Sample command line args to "node interview1.js":
// '[1,2,[1,2,3]]' '[1,[1,2],6]'                --> [ 1 ]
// '[1,2,[1,2,3]]' '[1,[1,2,3],6]'              --> [ 1, [ 1, 2, 3 ] ]
// '[4,1,2,[1,2,[3]]]' '[1,[[4, 3],1,2],4,6]'   --> [ 4, 1 ]
// '[4,1,2,[1,2,[3,4]]]' "[1,[[4, 3],1,2],4,6]' --> [ 4, 1, [ 1, 2, [ 3, 4 ] ] ]
// '{"num1":1}' '[1,4,6]'                       --> TypeError (arr1 is an object)
