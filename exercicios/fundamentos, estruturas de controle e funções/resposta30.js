// 30) ​Escreva um algoritmo que percorre um vetor de inteiros e defina o maior e menor valor dentro do vetor.

function encontrarMaiorEMenor(vetor) {
    let maior = vetor[0]
    let menor = vetor[0]

    for (let i = 1; i < vetor.length; i++) {
        if (vetor[i] > maior) {
            maior = vetor[i];
        }
        if (vetor[i] < menor) {
            menor = vetor[i]
        }
    }

    console.log(`Maior valor: ${maior}`)
    console.log(`Menor valor: ${menor}`)
}

encontrarMaiorEMenor([10, 20, 5, 7, 3, 1, 8])