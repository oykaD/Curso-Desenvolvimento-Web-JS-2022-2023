// Elabore uma função que recebe dois parâmetros: o primeiro é um array de números e o 
// segundo é um número que especifica uma quantidade de dígitos. Essa função deverá 
// retornar somente aqueles números do array que têm a quantidade de dígitos indicada pelo 
// segundo parâmetro.

function filtrarNumerosPorQtdDigitos(numeros, qtdDigitos) {
    return numeros.filter(numero => String(numero).length === qtdDigitos)
}

console.log(filtrarNumerosPorQtdDigitos([9, 28, 140, 3456, 78915], 4))
console.log(filtrarNumerosPorQtdDigitos([9, 28, 140, 3456, 78915], 5))
console.log(filtrarNumerosPorQtdDigitos([9, 28, 140, 3456, 78915], 1))
console.log(filtrarNumerosPorQtdDigitos([9, 28, 140, 3456, 78915], 3))