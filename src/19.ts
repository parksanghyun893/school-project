function sumEvenNumbers(arr: number[]): number {
  let sum = 0;
  arr.forEach((num) => {
    if (num % 2 === 0) {
      sum += num;
    }
  });
  return sum;
}

console.log(sumEvenNumbers([1, 2, 3, 4, 5]));
