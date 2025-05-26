function fibonacci(n: number): number {
  if (n <= 1) return n;
  let a = 0, b = 1, sum = 0;
  for (let i = 2; i <= n; i++) {
    sum = a + b;
    a = b;
    b = sum;
  }
  return sum;
}

console.log(fibonacci(10));
