function getMostRepeated(intArray) {
  let mostReapeated = intArray[0];
  let counter = 0;

  for (let index = 0; index < intArray.length; index++) {
    tempCounter = 0;

    for (let secondIndex = 0; secondIndex < intArray.length; secondIndex++) {
      if (intArray[index] === intArray[secondIndex]) {
        tempCounter++;
      }
    }
    if (tempCounter > counter) {
      counter = tempCounter;
      mostReapeated = intArray[index];
    }
  }

  return mostReapeated;
}

console.log(getMostRepeated([2, 3, 2, 5, 8, 2, 3]));
