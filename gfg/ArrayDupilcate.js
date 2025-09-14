function findDuplicates(arr) {
    const seen = new Set();
    const result = [];
    for (const num of arr) {
        if (seen.has(num)) {
            result.push(num);
        } else {
            seen.add(num);
        }
    }
    return result;
}

// Example usage:
console.log(findDuplicates([2, 3, 1, 2, 3])); // Output: [2, 3]
console.log(findDuplicates([3, 1, 2]));       // Output: []