const readline = require('readline-sync');

const distancia = readline.questionInt('Distância: ');
const tempo = readline.questionInt('Tempo: ');
const mediaVelocidade = (distancia / tempo).toFixed(2);

console.log(`Velocidade média: ${mediaVelocidade}m/s`);
