
// Function to reverse a given string
function ReverseString(str){
    return str.split("").reverse().join("");
}

console.log(ReverseString("hello")); // !dlroW olleH

// Output: "olleh"

//Check if a string is a palindrome

function isPalindrome(str){
    let reversed = str.split("").reverse().join("");
    return str === reversed;
}

console.log(isPalindrome("raca")); // true