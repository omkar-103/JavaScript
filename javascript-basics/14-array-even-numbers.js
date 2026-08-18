function getEvenNumbers(numbers) {
    return numbers.filter((number) => number % 2 === 0);
}

console.log(getEvenNumbers([1, 2, 3, 4, 5, 6]));
console.log(getEvenNumbers([10, 15, 20, 25, 30]));
