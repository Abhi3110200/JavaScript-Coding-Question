function ReverseOnlyLetters(str){
    let arr = str.split('');

    let left = 0;
    let right = str.length - 1;
    console.log(arr);

    while(left<right){
        if(!/[a-zA-Z]/.test(arr[left])){
            left++;
        }else if(!/[a-zA-Z]/.test(arr[right])){
            right--;
        }else{
            let temp = arr[left];
            arr[left] = arr[right];
            arr[right] = temp;
            left++;
            right--;
        }
    }

    return arr.join('');
    console.log(arr);
    
}
console.log(ReverseOnlyLetters("ab-cd"));