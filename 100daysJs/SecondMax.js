function SecondMax(arr){
    let max = arr[0];
    let secondMax = -Infinity;
    for(let i = 1; i < arr.length; i++){
        if(arr[i] > max){
            secondMax = max;
            max = arr[i];
        } else if(arr[i] > secondMax && arr[i] < max){
            secondMax = arr[i];
        }
    }
    return secondMax;
}

console.log(SecondMax([1, 2, 3, 4, 5])); // Output: 4