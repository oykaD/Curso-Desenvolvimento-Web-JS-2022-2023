// Crie uma função que recebe um array de números e retorna o segundo maior número 
// presente nesse array.

function segundoMaiorNumero(numeros) {
    // Ordenar o array em ordem crescente
    numeros.sort((a, b) => a - b)

    // O segundo maior número é o penúltimo elemento do array
    return numeros[numeros.length - 2]
}

console.log(segundoMaiorNumero([1, 2, 3, 4, 5]))
console.log(segundoMaiorNumero([5, 3, 9, 1, 7]))
console.log(segundoMaiorNumero([-5, 10, -1]))