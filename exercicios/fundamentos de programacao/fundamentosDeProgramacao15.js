// Elabore uma função que receba um array de números e retorne um array que tenha todos 
// os números que são pares e que também tenham índices pares.

function paresIndicePar(arr) {
    return arr.filter((valor, indice) => valor % 2 === 0 && indice % 2 === 0)
}

console.log(paresIndicePar([1, 2, 3, 4, 5, 6, 7, 8, 9]))
console.log(paresIndicePar([3, 5, 7, 8, 9, 11, 12, 13]))
console.log(paresIndicePar([0, 2, 4, 6, 8, 10]))
console.log(paresIndicePar([1, 3, 5, 7, 9, 11]))