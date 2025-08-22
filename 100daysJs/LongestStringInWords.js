function FindLongestString(string){
    const words = string.split(' ');

    let longestWord = '';

    for(let i=0;i<string.length;i++){
        if(words[i].length > longestWord.length){
            longestWord = words[i];
        }
    }

    return longestWord;
}
console.log(FindLongestString('The Abhijeet Abhijksl'));