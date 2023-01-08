// Elabore uma função que recebe um número como parâmetro e retorne uma string com o 
// símbolo "+" na quantidade especificada no parâmetro.

function simbolos(numero) {
    let simbolo = ''
    for (let i = 0; i < numero; i++) {
        simbolo += '+'
    }
    return simbolo
}

console.log(simbolos(5))
console.log(simbolos(3))