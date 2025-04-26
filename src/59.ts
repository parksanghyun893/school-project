function sumOfSquares(nums: number[]): number {
  let sum = nums.reduce((acc, num) => acc + Math.pow(num, 2), 0);
  return sum;
}
