// Crie uma função que receba um array de elementos e retorne um array somente com os 
// números presentes no array recebido como parâmetro.

function filtrarNumeros(elementos) {
    let numeros = elementos.filter(elem => typeof elem === 'number')
    return numeros
}

console.log(filtrarNumeros([1, 2, 'a', 'b', 3, 4]))
console.log(filtrarNumeros(['a', 'b', 'c', 1, 2, 3]))
console.log(filtrarNumeros(["1", 2, "3", 4, "5"]))
console.log(filtrarNumeros([1, 2, 3, 4, 5]))