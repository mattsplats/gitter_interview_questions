'use strict';

function swap (arr, x, y) {
  const temp = arr[x];
  arr[x] = arr[y];
  arr[y] = temp;
}

function selection_sort (arr) {
  for (let i = 0; i < arr.length; i++) {
    let min   = arr[i],
        index = i;

    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < min) {
        min   = arr[j];
        index = j;
      }
    }
    swap(arr, i, index);
  }
}

let testArr = [];
for (let i = 0; i < 100; i++) {
  testArr.push(Math.floor(Math.random() * 1000));
}
selection_sort(testArr);
console.log(testArr);