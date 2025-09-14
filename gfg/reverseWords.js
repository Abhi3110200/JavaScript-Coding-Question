function reverseWords(s) {
    let parts = s.split('.');
    parts = parts.filter(part => part.length > 0);
    parts.reverse();
    return parts.join('.');
}

console.log(reverseWords("i.like.this.program.very.much")); 
// much.very.program.this.like.i

console.log(reverseWords("..hello..world.."));
// world.hello

console.log(reverseWords("singleword"));