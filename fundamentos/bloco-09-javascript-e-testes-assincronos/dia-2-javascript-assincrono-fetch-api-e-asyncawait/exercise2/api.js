const API_URL = 'https://api.coincap.io/v2/assets';

const fetchCryptoCurrency = async () => {
  const coinsUl = document.getElementById('currency-container');
  const coins = await fetch(API_URL)
    .then((response) => response.json())
    .then((data) => data.data)
    .catch((error) => error.toString());

  coins.slice(0, 10).forEach(coin => {
    const { name, symbol, priceUsd } = coin;
    const newLi = document.createElement('li');
    newLi.innerText = `${name} ${symbol}: ${Number(priceUsd).toFixed(2)}`
    coinsUl.appendChild(newLi);
  });
};

window.onload = () => fetchCryptoCurrency();