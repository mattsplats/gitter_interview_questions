'use strict';

const arr = [];

function binarySeq (len, count=0, seq=[]) {
  if (len === 0) {
    arr.push((arr.length + 1) + ': ' + seq.join(''));
    return;
  }

  seq[count] = 0;
  binarySeq(len - 1, count + 1, seq);

  seq[count] = 1;
  binarySeq(len - 1, count + 1, seq);
}

binarySeq(process.argv[2]);
console.log(arr)
