const palio = ['Palio', 'Fiat', 2019];
const shelbyCobra = ['Shelby Cobra', 'Ford', 1963];
const chiron = ['Chiron', 'Bugatti', 2016];

// escreva toObject abaixo
const toObject = ([nome, fabricante, ano]) => {
  return {
    nome,
    fabricante,
    ano,
  };
};

console.log(toObject(palio));
console.log(toObject(shelbyCobra));
console.log(toObject(chiron));