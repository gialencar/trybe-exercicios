
function getBiggestIndex(intArray) {
    let biggest = 0;
    for (const i in intArray) {
        if (intArray[i] > biggest) {
            biggest = i;
        }
    }
    return biggest;
}

console.log(getBiggestIndex([2, 3, 6, 7, 10, 1]));
