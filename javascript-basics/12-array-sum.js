function sumArray(numbers) {
    return numbers.reduce((total, current) => total + current, 0);
}

console.log(sumArray([1, 2, 3, 4, 5]));
console.log(sumArray([10, 20, 30]));
