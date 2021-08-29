const n = 19;
let str = '';

for (let i = 1; i <= n; i+= 2) {
    str += ' '.repeat((n - i) / 2);

    if (i > 1 && i < n) {
        str += '*';
        str += ' '.repeat(i - 2);
        str += '*';
    } else {
        str += '*'.repeat(i);
    }
    console.log(str);
    str = '';
}
