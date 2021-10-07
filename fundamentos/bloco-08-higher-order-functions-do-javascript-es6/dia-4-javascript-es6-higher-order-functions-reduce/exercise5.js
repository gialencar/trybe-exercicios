const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

function containsA() {
  return names.reduce((numOfAs, currName) => {
    const num = currName
      .split('')
      .filter((letter) => letter === 'a' || letter === 'A').length;

    return numOfAs += num;
  }, 0);
}

console.log(containsA());