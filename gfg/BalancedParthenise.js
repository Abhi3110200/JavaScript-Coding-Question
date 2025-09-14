function Checker(str) {
    let stack = [];

    const mapping = {
        ')': '(',
        '}': '{',
        ']': '['
    };

    for(let char of str){
        if(char === '(' || char === '{' || char === '['){
            stack.push(char);
        }
        else if(char === ')' || char === '}' || char === ']'){
            if(stack.length === 0 || stack.pop() !== mapping[char]){
                return false;
            }
        }
    }
    
    return stack.length === 0;
}

console.log(Checker('[{()}]')) // true
console.log(Checker('[(])')) // false
console.log(Checker('[({})](]')) // false
console.log(Checker('((()))')) // true