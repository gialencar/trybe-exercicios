const readline = require('readline-sync');

const peso = readline.questionInt('Qual o seu peso? ');
const altura = readline.questionFloat('Qual a sua altura? ');

function imc(peso, altura) {
  return peso / altura ** 2;
};

console.log(imc(peso, altura).toFixed(2));
