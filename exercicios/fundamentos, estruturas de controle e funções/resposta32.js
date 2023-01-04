// 32)​ Construir um algoritmo que calcule a média aritmética dos valores de um vetor de inteiros.

function calcularMedia(vetor) {
    let soma = 0 // inicializa a variável de soma com 0

    // percorre todos os elementos do vetor
    for (let i = 0; i < vetor.length; i++) {
        soma += vetor[i] // adiciona o valor do elemento atual à soma
    }

    // divide a soma pelo número de elementos do vetor para calcular a média
    let media = soma / vetor.length

    console.log(`Média: ${media}`)
}

// exemplo de uso da função
let vetor = [1, 2, 3, 4, 5]
calcularMedia(vetor); // imprime "Média: 3"