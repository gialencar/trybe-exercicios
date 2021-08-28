let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let i = 1; i < numbers.length; i++) {

    for (let k = 0; k < i; k++) {

        if (numbers[k] > numbers[i]) {
            aux = numbers[k];
            numbers[k] = numbers[i];
            numbers[i] = aux;
        }
    }
}

console.log(numbers);
