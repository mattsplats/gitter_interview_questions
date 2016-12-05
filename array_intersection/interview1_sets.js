'use strict';

// ES6 destructing assignment for the runtime arguments to intersect
let [ , , arr1, arr2] = process.argv;

// Convert input strings to arrays
arr1 = JSON.parse(arr1);
arr2 = JSON.parse(arr2);

// Throw error if both processed strings are not arrays
// ES6 preferred type inference for arrays is the static method Array.isArray()
if (!Array.isArray(arr1) || !Array.isArray(arr2)) throw new TypeError("One or more args not of type Array");

// Set intersection implementation
Set.prototype.intersection = function(setB) {
  const intersection = new Set();
  for (const elem of setB) {
    if (this.has(elem)) intersection.add(elem);
  }
  return intersection;
}

// Set-based intersect function
// Correctly handles all primitive types
// Runs in O(n + m) time (assuming set membership is a correctly implemented O(1) operation)
// By using the smaller set as the argument to intersection(), fewer loop iterations are required
function intersect(arr1, arr2) {
  // Reference swap so longer array always becomes set1
  if (arr1.length < arr2.length) {
    const temp = arr1;
    arr1 = arr2;
    arr2 = temp;
  }

  const set1 = new Set(arr1),
        set2 = new Set(arr2);

  // Uses the ES6 spread operator so that the returned value is an array
  return [...set1.intersection(set2)];
}

console.log(intersect(arr1, arr2));

// Sample command line args to "node interview1.js":
// '[1,2,6]' '[1,2,6]'           --> [ 1, 2, 6 ]
// '[1,2]' '[1,2,6]'             --> [ 1, 2 ]
// '[1,2,6]' '[1,2]'             --> [ 1, 2 ]
// '[1,2,true]' '[1,2,true]'     --> [ 1, 2, true ]
// '[1,2,"test"]' '[1,2,"test"]' --> [ 1, 2, "test" ]
