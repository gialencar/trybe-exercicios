const isEqual = (num1, num2) => {
  if (num1 === num2) return true;
};

const lottoResult = (number, func) => {
  const result = Math.floor(Math.random() * 5) + 1;
  // console.log(result);
  if (func(number, result)) return 'Parabéns você ganhou';
  else return 'Tente novamente';
};

console.log(lottoResult(4, isEqual));
