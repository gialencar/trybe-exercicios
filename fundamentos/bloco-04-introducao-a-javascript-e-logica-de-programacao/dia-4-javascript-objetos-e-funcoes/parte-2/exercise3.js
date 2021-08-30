
function getSmallestIndex(intArray) {
    let smallest = Infinity;
    for (const i in intArray) {
        if (intArray[i] < smallest) {
            smallest = i;
        }
    }
    return smallest;
}

console.log(getSmallestIndex([2, 4, 6, 7, 10, 0, -3]));
