function fib (n) {
  if (n === 0) return [];
  if (n === 1) return [0];

  const arr = [0, 1];

  function getFib () {
    if (n === arr.length) return arr;
    arr.push(arr[arr.length - 1] + arr[arr.length - 2]);
    return getFib();
  }
  
  return getFib();
}

console.log(fib(parseInt(process.argv[2])));