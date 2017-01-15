function sumUpTo(n, sum=0) {
  if (n > 0) return sumUpTo(n - 1, sum + n);
  return sum;
}

function sumUpToSimple(n) {
  if (n == 0) return 0;
  if (n == 1) return 1;

  return n + sumUpToSimple(n - 1);
}

console.log(sumUpTo(5), sumUpToSimple(5));