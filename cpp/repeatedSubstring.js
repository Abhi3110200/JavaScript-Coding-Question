function repeated(s) {
    const n = s.length;
    for (let i = 1; i <= n / 2; i++) {
        if (n % i === 0) {
            const substring = s.slice(0, i);
            if (substring.repeat(n / i) === s) {
                return true;
            }
        }
    }
    return false;
}

console.log(repeated("abab")); // true
console.log(repeated("aba")); // false