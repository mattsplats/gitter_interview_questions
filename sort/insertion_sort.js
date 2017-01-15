'use strict';

function swap (arr, x, y) {
  const temp = arr[x];
  arr[x] = arr[y];
  arr[y] = temp;
}

function insertion_sort (arr) {
  for (let i = 0; i < arr.length; i++) {
    let j = i;
    while (j > 0 && arr[j - 1] > arr[j]) {
      swap(arr, j, --j);
    }
  }
}

let testArr = [];
for (let i = 0; i < 100; i++) {
  testArr.push(Math.floor(Math.random() * 1000));
}
insertion_sort(testArr);
console.log(testArr);