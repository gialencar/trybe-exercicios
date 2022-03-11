const readline = require('readline-sync');

const peso = readline.questionInt('Qual o seu peso? ');
const altura = readline.questionFloat('Qual a sua altura? ');

function imc(peso, altura) {
  const imc = (peso / altura ** 2).toFixed(2);

  if (imc < 18.5) {
    return `IMC: ${imc} - Abaixo do peso (magreza)`;
  }
  if (imc >= 18.5 && imc < 25) {
    return `IMC: ${imc} - Peso normal`;
  }
  if (imc >= 25 && imc < 30) {
    return `IMC: ${imc} - Acima do peso (sobrepeso)`;
  }
  if (imc >= 30 && imc < 35) {
    return `IMC: ${imc} - Obesidade grau I`;
  }
  if (imc >= 35 && imc < 40) {
    return `IMC: ${imc} - Obesidade grau II`;
  }
};

console.log(imc(peso, altura));
