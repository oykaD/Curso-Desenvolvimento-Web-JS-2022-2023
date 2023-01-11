// Desenvolva uma função que receba como parâmetro um número de 1 a 10. Internamente, 
// na função, será gerado um número aleatório de 1 a 10. A função deverá retornar se o 
// parâmetro de entrada foi igual ao número sorteado internamente. Se o valor fornecido foi o 
// sorteado, retorne "Parabéns! O número sorteado foi o X", se não for igual, retorne "Que 
// pena! O número sorteado foi o X". X é o número que foi sorteado.

function sorteio(numero) {
    // sorteia um número entre 1 e 10
    const sorteado = Math.floor(Math.random() * 10) + 1

    if (numero === sorteado) {
        return `Parabéns! O número sorteado foi o ${sorteado}.`
    } else {
        return `Que pena! O número sorteado foi o ${sorteado}.`
    }
}

console.log(sorteio(3))