// 37) ​Escreva duas funções, uma para progressão aritmética e uma para progressão geométrica que recebam 
// como parâmetros um número n (número de termo), ​a1​ (o primeiro termo) e ​r​ (a razão) e escreva os ​n​ termos, 
// bem como a soma dos elementos.

function progressaoAritmetica(n, a1, r) {
    let soma = 0
    for (let i = 0; i < n; i++) {
        console.log(a1 + r * i)
        soma += a1 + r * i
    }
    console.log(`Soma: ${soma}`)
}

function progressaoGeometrica(n, a1, r) {
    let soma = 0
    for (let i = 0; i < n; i++) {
        console.log(a1 * Math.pow(r, i))
        soma += a1 * Math.pow(r, i)
    }
    console.log(`Soma: ${soma}`)
}

// Progressão Aritmética
// 10 termos, primeiro termo = 2, razão = 3
// Saída esperada: 2, 5, 8, 11, 14, 17, 20, 23, 26, 29
// Soma: 145
progressaoAritmetica(10, 2, 3)

// Progressão Geométrica
// 5 termos, primeiro termo = 2, razão = 3
// Saída esperada: 2, 6, 18, 54, 162
// Soma: 240
progressaoGeometrica(5, 2, 3)