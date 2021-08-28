let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let smallerNum;

for (let i = 0; i < numbers.length; i++) {
    if (smallerNum === undefined) {
        smallerNum = numbers[i];
    } else if (numbers[i] < smallerNum) {
        smallerNum = numbers[i];
    }
}

console.log(smallerNum);