/*write me a program that gives the fib sequence between 0 and a number n

...

number is 5

1, 1, 2, 3

number is 3

1, 1, 2


without recursion
*/
function fib(n){
  if (n < 1) {
    return undefined;
  
  } else if (n < 2) {
    return [];
  }
  
  var arr = [0, 1];

  while (arr[arr.length - 2] + arr[arr.length - 1] < n) {
    arr.push(arr[arr.length - 2] + arr[arr.length - 1]);
  }

  return arr.slice(1);
}

console.log(fib(process.argv[2]));