// 31) ​Escrever um algoritmo que percorre um vetor de inteiros, conta quantos números negativos há nesse vetor 
// e imprime a quantidade no console.

function contarNegativos(vetor) {
    // Inicializa a variável contadora
    let contador = 0

    // Percorre o vetor
    for (let i = 0; i < vetor.length; i++) {
        // Se o elemento do vetor for negativo, incrementa a variável contadora
        if (vetor[i] < 0) {
            contador++
        }
    }

    // Imprime a quantidade de números negativos
    console.log(`Existem ${contador} números negativos no vetor.`)
}

// Exemplo de uso da função
contarNegativos([1, -2, 3, -4, 5, -6]) // Exibe "Existem 3 números negativos no vetor."