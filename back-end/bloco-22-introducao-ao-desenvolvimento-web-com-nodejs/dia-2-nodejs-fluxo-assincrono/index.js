function foo(n1, n2, n3) {
  return new Promise((resolve, reject) => {
    if (typeof (n1 + n2 + n3) !== "number") {
      reject("Informe apenas números");
    }
    const result = (n1 + n2) * n3;
    if (result < 50) reject("Valor muito baixo");
    resolve(result);
  });
}

const n1 = Math.floor(Math.random() * 100 + 1);
const n2 = Math.floor(Math.random() * 100 + 1);
const n3 = Math.floor(Math.random() * 100 + 1);

foo(n1, n2, n3)
  .then((res) => console.log(res))
  .catch((err) => console.log(err));
