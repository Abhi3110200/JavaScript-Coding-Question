function CountCharFrequency(str) {
    let frequency ={};

    for(let char of str){
        if(frequency[char]){
            frequency[char]++;
        }
        else{
            frequency[char] = 1;
        }
    }
    return frequency;
}

console.log(CountCharFrequency("hello Abhijeet")); // Output: { h: 1, e: 1, l: 3, o: 2, ' ': 1, w: 1, r: 1, d: 1 }