const readline = require('readline-sync');

console.log(`
1: IMC
2: Velocidade
3: Sorteio`);
const script = readline.questionInt('Qual script deseja executar? ');

if (script === 1) {
  require('./imc');
};
if (script === 2) {
  require('./velocidade');
};
if (script === 3) {
  require('./sorteio');
};
