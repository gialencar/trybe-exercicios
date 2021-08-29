const n = 11;
let divisors = 1;

for (let index = 2; index <= n; index++) {
    if (n % index === 0) {
        divisors++;
    }
}

if (divisors === 2) {
    console.log(n, 'É um número primo.');
} else {
    console.log(n, 'NÃO é um número primo');
}
