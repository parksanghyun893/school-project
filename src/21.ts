function fibonacci(num: number): number {
  if (num <= 1) return num;
  const previous = 0, current = 1;
  for (let i = 2; i <= num; i++) {
    [previous, current] = [current, previous + current];
  }
  return current;
}

function sumNumbers(numbers: number[]): number {
  let sum = 0;
  numbers.forEach((num) => {
    if (typeof num === "number" && !isNaN(num)) {
      sum += num;
    }
  });
  return sum;
}
