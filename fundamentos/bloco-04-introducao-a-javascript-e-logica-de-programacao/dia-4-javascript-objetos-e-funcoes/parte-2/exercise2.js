
function getBiggestValue(intArray) {
    let biggest = 0;
    for (const i in intArray) {
        if (intArray[i] > biggest) {
            biggest = i;
        }
    }
    return biggest;
}

console.log(getBiggestValue([2, 3, 6, 7, 10, 1]));
