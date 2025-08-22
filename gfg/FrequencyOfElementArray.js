function frequency(arr) {
    const freqMap = {};
    
    for(let i=0;i<arr.length;i++){
        if(freqMap[arr[i]]){
            freqMap[arr[i]]++;
        }
        else{
            freqMap[arr[i]] = 1;
        }
    }

    return freqMap;
}

console.log(frequency([1,2,3,4,5]));

