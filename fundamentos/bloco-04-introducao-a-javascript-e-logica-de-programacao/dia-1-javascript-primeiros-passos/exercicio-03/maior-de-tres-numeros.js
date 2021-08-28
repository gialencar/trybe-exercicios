const a = 4
const b = 5
const c = 9

switch (true) {
    case a > b && a > c:
        console.log(a,"é o maior número");
        break;

    case b > a && b > c:
        console.log(b,"é o maior número");
        break;

    case c > b && c > a:
        console.log(c,"é o maior número");
        break;

    default:
        console.log("Os números são iguais");
        break;
}