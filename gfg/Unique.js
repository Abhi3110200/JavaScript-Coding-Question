const s = 'Abhijeet';
const count = {};
const uniqueChars = [];

for(const char of s){
    count[char] = (count[char] || 0) + 1;
}

for(const char in count){
   if (count[char] === 1) {
        uniqueChars.push(char);
    }
}

console.log(uniqueChars); // Output: "fg"


// Given a string s consisting of lowercase English Letters. Return the first non-repeating character in s.
// If there is no non-repeating character, return '$'.
// Note: When you return '$' driver code will output -1.

// Examples:

// Input: s = "geeksforgeeks"
// Output: 'f'
// Explanation: In the given string, 'f' is the first character in the string which does not repeat.
// Input: s = "racecar"
// Output: 'e'
// Explanation: In the given string, 'e' is the only character in the string which does not repeat.
// Input: s = "aabbccc"
// Output: -1
// function firstNonRepeatingCharacter(s) {
//     const count = {};
    
//     // Count occurrences of each character
//     for (const char of s) {
//         count[char] = (count[char] || 0) + 1;
//     }
    
//     // Find the first non-repeating character
//     for (const char of s) {
//         if (count[char] === 1) {
//             return char;
//         }
//     }
    
//     return '$'; // If no non-repeating character found
// }