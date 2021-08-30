const n = 5;

for (let i = 1; i <= n; i+= 2) {
    console.log(' '.repeat((n - i) / 2) + '*'.repeat(i));
}
