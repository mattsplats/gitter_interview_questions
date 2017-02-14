'use strict';

function swap (arr, x, y) {
  const temp = arr[x];
  arr[x] = arr[y];
  arr[y] = temp;
}

function bubble_sort (arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - 1; j++) {
      if (arr[j] > arr[j + 1]) swap(arr, j, j + 1);
    }
  }
}

let testArr = [];
for (let i = 0; i < 100; i++) {
  testArr.push(Math.floor(Math.random() * 1000));
}
console.log(testArr);
bubble_sort(testArr);
console.log(testArr);
