var removeElement = function(nums, val) {
    let k=0;

    for(let i=0;i<nums.length;i++){
        if(nums[i]!==val){
            nums[k]=nums[i];
            k++;
        }
    }

    return k;
};

// Example usage:
let nums = [3,2,2,3];
let val = 3;
let newLength = removeElement(nums, val);
console.log(newLength); // Output: 2
console.log(nums.slice(0, newLength)); // Output: [2, 2]