// Escreva uma função que receba dois parâmetros. O primeiro parâmetro é o elemento que 
// repetirá, enquanto que o segundo será o número de vezes que haverá repetição. Um array 
// será retornado.

function repetirElemento(elemento, numeroDeVezes) {
    let resultado = []
    for (let i = 0; i < numeroDeVezes; i++) {
        resultado.push(elemento)
    }
    return resultado
}

console.log(repetirElemento('a', 3))
console.log(repetirElemento(7, 2))
console.log(repetirElemento('bola', 0))
console.log(repetirElemento(true, 4))
