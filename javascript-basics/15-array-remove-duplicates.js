function removeDuplicates(numbers) {
    return [...new Set(numbers)];
}

console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5]));
console.log(removeDuplicates([8, 8, 9, 10, 9, 11]));
