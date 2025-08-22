function countChar(str,char){
    return str.split('').map(c => c.toLowerCase() === char.toLowerCase() ? 1 : 0).reduce((a,b) => a + b, 0);
}

console.log(countChar('The Abhijeet Abhijksl', 'a'));