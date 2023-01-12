// Desenvolva uma função que receba um string como parâmetro e retorne essa string 
// somente com as consoantes, ou seja, sem as vogais.

function removerVogais(s) {
    return s.replace(/[aeiouAEIOU]/g, "")
}

console.log(removerVogais("Oi, tudo bem?"))
console.log(removerVogais("Cod3r"))