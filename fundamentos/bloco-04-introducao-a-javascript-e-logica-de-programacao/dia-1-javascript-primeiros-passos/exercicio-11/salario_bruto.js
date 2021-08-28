inss_tabela = [
  [1100.0],
  [1100.01, 2203.48],
  [2203.49, 3305.22],
  [3305.23, 6433.57],
];

irrf_tabela = [
  [1903.98],
  [1903.99, 2826.65],
  [2826.66, 3751.05],
  [3751.06, 4664.68],
];

const salario_bruto = 3000.0;
let rendimento;
let inss;
let irrf;

if (salario_bruto <= inss_tabela[0][0]) {
  inss = salario_bruto * 0.075;
} else if (inss_tabela[1][0] <= salario_bruto <= inss_tabela[1][1]) {
  inss = salario_bruto * 0.09 - 16.5;
} else if (inss_tabela[2][0] <= salario_bruto <= inss_tabela[2][1]) {
  inss = salario_bruto * 0.12 - 82.6;
} else if (inss_tabela[3][0] <= salario_bruto <= inss_tabela[3][1]) {
  inss = salario_bruto * 0.14 - 148.7;
} else {
  inss = 751.97;
}

console.log("inss:", inss);
rendimento = salario_bruto - inss;

if (rendimento <= irrf_tabela[0][0]) {
  irrf = 0;
} else if (irrf_tabela[1][0] <= rendimento <= irrf_tabela[1][1]) {
  irrf = rendimento * 0.075 - 142.8;
} else if (irrf_tabela[2][0] <= rendimento <= irrf_tabela[2][1]) {
  irrf = rendimento * 0.15 - 354.8;
} else if (irrf_tabela[3][0] <= rendimento <= irrf_tabela[3][1]) {
  irrf = rendimento * 0.225 - 636.13;
} else {
  irrf = rendimento * 0.275 - 869.36;
}

console.log("ir:", irrf);

console.log("Salario liquido:", rendimento - irrf);
