function wrongSubtraction(n, k) {
  for (var i = 0; i < k; i++) {
    if (n % 10 === 0) {
      n = Math.floor(n / 10);
    } else {
      n -= 1;
    }
  }
  return n;
}

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

var input = [];
rl.on("line", (line) => {
  input.push(line.trim());
  if (input.length === 2) { // expect n and k separately
    let n = parseInt(input[0]);
    let k = parseInt(input[1]);
    console.log(wrongSubtraction(n, k));
    rl.close();
  }
});
