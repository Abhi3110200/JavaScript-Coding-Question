function abbreviate(word) {
    if (word.length > 10) {
        return word[0] + (word.length - 2) + word[word.length - 1];
    }
    console.log(word)
    return word;
}

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];
rl.on("line", (line) => {
    input.push(line.trim());
}).on("close", () => {
    input.forEach(word => {
        console.log(abbreviate(word));
    });
});
