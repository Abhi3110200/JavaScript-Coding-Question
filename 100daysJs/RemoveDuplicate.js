var removeDuplicates = function(nums) {
    const newArr = [...new Set(nums)];
    return newArr;
}

console.log(removeDuplicates([1, 1, 2])); // Output: [1, 2]
console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2])); // Output: [0, 1, 2]