// A fim de criar um mecanismo de busca para sua aplicação, você precisa iniciar criando uma 
// função para identificar palavras semelhantes.
// Escreva uma função que recebe como primeiro parâmetro uma palavra e, como segundo 
// parâmetro, um array de strings. A função deverá filtrar as palavras do array que contêm 
// nelas a string do primeiro parâmetro.

function buscarPalavras(palavra, arrayPalavras) {
    return arrayPalavras.filter((str) => str.includes(palavra))
}

console.log(buscarPalavras("ola", ["olá", "olé", "tola"]))
console.log(buscarPalavras("o", ["olá", "olé", "tola"]))
console.log(buscarPalavras("á", ["olá", "olé", "tola"]))
console.log(buscarPalavras("x", ["olá", "olé", "tola"]))