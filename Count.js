
// Sample Input 1 :
// 0
// Sample Output 1 :
// 1

function countTrailingZeros(numStr) {
  // Ensure it's treated as a string
  numStr = String(numStr);

  // Special case: all zeros
  if (/^0+$/.test(numStr)) return 1;

  // Remove leading zeros
  let trimmed = numStr.replace(/^0+/, '');

  // Count trailing zeros
  let count = 0;
  for (let i = trimmed.length - 1; i >= 0; i--) {
    if (trimmed[i] === '0') count++;
    else break;
  }
  return count;
}

console.log(countTrailingZeros("30452032")); // 2
