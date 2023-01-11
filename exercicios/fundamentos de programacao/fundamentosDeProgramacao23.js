// Criar uma função que receba uma string como parâmetro e conte quantas palavras tem 
// nela.

function contarPalavras(string) {
    const palavras = string.split(" ")
    return palavras.length
}

console.log(contarPalavras("Oi, eu sou o Dakyo"))
console.log(contarPalavras("Eu adoro programar em JavaScript"))
console.log(contarPalavras("Estou aprendendo muito"))