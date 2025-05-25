// This is an example of how you can use TypeScript with a simple function to calculate the square root of a number.
function sqrt(number: number): number {
  if (number < 0) {
    throw new Error('Number must be non-negative');
  }
  return Math.sqrt(number);
}

console.log(sqrt(16)); // Output: 4.0
