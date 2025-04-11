// This is just an example code to get you started.
function calculateSum(numbers: number[]): number {
  let total = 0;
  numbers.forEach((number) => {
    if (typeof number === 'number' && !isNaN(number)) {
      total += number;
    }
  });
  return total;
}

// Example usage:
const result = calculateSum([1, 2, 3, 4]);
console.log(result); // Output: 10
