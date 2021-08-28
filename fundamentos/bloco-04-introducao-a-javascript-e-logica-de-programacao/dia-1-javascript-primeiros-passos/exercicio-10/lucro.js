const valorCusto = 21.5;
const valorVenda = 42.5;

if (valorCusto >= 0 && valorVenda >= 0) {
  let valorCustoTotal = valorCusto + 0.2 * valorCusto;
  let lucro = valorVenda - valorCustoTotal;
  let lucroTotal = lucro * 1000;
  console.log("Lucro sobre a venda de 1000 unidades:", lucroTotal);
} else {
    console.log("Erro: Valores não podem ser negativos.");
}
