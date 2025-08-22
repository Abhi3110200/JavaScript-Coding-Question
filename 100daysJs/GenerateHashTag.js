function generateHashTag(str) {
    return '#' + str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join('');
}

console.log(generateHashTag('The abhijeet Abhijksl'));
// Output: #TheAbhijeetAbhijksl
