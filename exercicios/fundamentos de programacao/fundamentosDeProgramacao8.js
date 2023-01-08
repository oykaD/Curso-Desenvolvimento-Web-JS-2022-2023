// Desenvolva uma função que recebe dois números inteiros não negativos (maiores ou iguais 
// a zero) e realize a multiplicação deles. Porém, não utilize o operador de multiplicação.

function multiplicar(num1, num2) {
    let resultado = 0
    for (let i = 0; i < num2; i++) {
        resultado += num1
    }
    return resultado
}

console.log(multiplicar(3, 4))
console.log(multiplicar(5, 3))
console.log(multiplicar(10, 0))
console.log(multiplicar(0, 5))