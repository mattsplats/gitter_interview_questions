'use strict';

const arr = [];

for (let i=0; i < Math.pow(2, process.argv[2]); i++) {
  let seq = i.toString(2);

  while (seq.length < process.argv[2]) seq = 0 + seq;

  arr.push((i + 1) + ': ' + seq);
}

console.log(arr)
