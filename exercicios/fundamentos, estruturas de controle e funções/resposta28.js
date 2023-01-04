// 28) ​Ler um vetor de números inteiros e imprimir quantos são pares e quantos são ímpares.

function contarParesImpares(vetor) {
    let pares = 0
    let impares = 0

    for (let i = 0; i < vetor.length; i++) {
        if (vetor[i] % 2 === 0) {
            pares++
        } else {
            impares++
        }
    }

    console.log(`Existem ${pares} números pares e ${impares} números ímpares no vetor.`)
}

contarParesImpares([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])