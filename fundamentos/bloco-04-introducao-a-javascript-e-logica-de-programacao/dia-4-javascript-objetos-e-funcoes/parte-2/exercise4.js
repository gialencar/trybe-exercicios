function biggestName(names) {
  let biggest = names[0];

  for (const i in names) {
    if (names[i].length > biggest.length) {
      biggest = names[i];
    }
  }

  return biggest;
}

console.log(
  biggestName(["José", "Lucas", "Nádia", "Fernanda", "Cairo", "Joana"])
);
