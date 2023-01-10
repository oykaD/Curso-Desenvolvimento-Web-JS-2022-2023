// Numa aplicação Web de investimento financeiro da qual você faz parte da equipe de 
// desenvolvimento, pretende-se adicionar a funcionalidade de calcular a média de um 
// conjunto de números informados pelo usuário.
// Com o intuito de realizar esse cálculo, crie uma função que receba um array com uma 
// quantidade indeterminada de números e retorne a média simples desses números.

function calcularMedia(numeros) {
    if (numeros.length === 0) {
        return 0
    }
    let soma = 0
    for (let numero of numeros) {
        soma += numero
    }
    return soma / numeros.length
}

console.log(calcularMedia([1, 2, 3, 4, 5]))
console.log(calcularMedia([1, 4, 9, 16, 25]))
console.log(calcularMedia([5, 10, 15, 20, 25]))