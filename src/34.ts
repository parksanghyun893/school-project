function sumEvenNumbers(numbers: number[]): number {
    return numbers.filter((num) => num % 2 === 0).reduce((acc, curr) => acc + curr, 0);
}

console.log(sumEvenNumbers([1, 2, 3, 4, 5])); // Output: 6
