// 03)​ Crie uma função que recebe dois parâmetros, base e expoente, e retorne a base elevada ao expoente.

function potencia(base, expoente) {
    let resultado = 1;
    for (let i = 0; i < expoente; i++) {
    resultado *= base;
    }
    return `A resposta é: ${resultado}`;
    }

console.log(potencia(2, 3))
console.log(potencia(5, 2))
console.log(potencia(10, 10))