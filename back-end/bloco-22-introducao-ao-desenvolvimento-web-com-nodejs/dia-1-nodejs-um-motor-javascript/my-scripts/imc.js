const peso = 80;
const altura = 1.7;

function imc(peso, altura) {
  return peso / altura ** 2;
};

console.log(imc(peso, altura).toFixed(2));
