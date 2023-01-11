// Desenvolva uma função que recebe um caractere e uma string como parâmetros e retorne a 
// quantidade de vezes que o caractere se repete na string. A função deverá ser case-sensitive, 
// ou seja, irá diferenciar maiúsculas e minúsculas.

function contarCaractere(caractere, string) {
    return string.split('').filter(c => c === caractere).length
}

console.log(contarCaractere('a', 'banana'))
console.log(contarCaractere('b', 'banana'))
console.log(contarCaractere('A', 'banana'))