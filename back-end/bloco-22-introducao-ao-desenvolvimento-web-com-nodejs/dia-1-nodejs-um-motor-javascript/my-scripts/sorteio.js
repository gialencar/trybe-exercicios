const readline = require('readline-sync');

const numero = Math.floor(Math.random() * 11);

const chute = readline.questionInt("Número: ");

if (chute === numero) {
  console.log("Parabéns, número correto!");
} else {
  console.log(`Opa, não foi dessa vez. O número era ${numero}`);
}
