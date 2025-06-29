function GenerateAllCombination(string){
    let result = [];

    for(let i=0;i<string.length;i++){
        for(let j=i+1;j<string.length+1;j++){
            result.push(string.slice(i,j));
        }
    }
    return result;
}

console.log(GenerateAllCombination("Abhijeet"));
// Output: [ 'a', 'ab', 'abc', 'ac', 'b', 'bc', 'c' ]
// Explanation: The function generates all combinations of the characters in the string "abc".