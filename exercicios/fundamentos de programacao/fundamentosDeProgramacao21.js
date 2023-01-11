// Criar uma função que receba um array de números e retorne o menor número desse array.

function menorNumero(numeros) {
    let menor = numeros[0]
    for (let i = 1; i < numeros.length; i++) {
        if (numeros[i] < menor) {
            menor = numeros[i]
        }
    }
    return menor
}

console.log(menorNumero([1, 5, 2, 7, 3]))
console.log(menorNumero([-5, -10, -7, -1, -3]))
console.log(menorNumero([5, 10, 7, 1, 3]))