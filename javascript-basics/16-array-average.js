function calculateAverage(numbers) {
    if (numbers.length === 0) {
        return 0;
    }

    const total = numbers.reduce((sum, number) => sum + number, 0);
    return total / numbers.length;
}

console.log(calculateAverage([10, 20, 30, 40]));
console.log(calculateAverage([5, 10, 15]));
