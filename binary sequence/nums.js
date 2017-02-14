'use strict';

const fs  = require('fs'),
      arr = [];

for (let i=0; i<2; i++) {
  let seq = [];
  seq[0] = i;

  for (let j=0; j<2; j++) {
    seq[1] = j;

    for (let k=0; k<2; k++) {
      seq[2] = k;

      for (let l=0; l<2; l++) {
        seq[3] = l;

        for (let m=0; m<2; m++) {
          seq[4] = m;

          for (let n=0; n<2; n++) {
            seq[5] = n;
            arr.push((arr.length + 1) + ': ' + seq.join(''));
          }
        }
      }
    }
  }
}

fs.writeFile('sequence2.txt', arr.join('\r\n'), err => {
  if (err) throw err;
  console.log('Done.');
});
