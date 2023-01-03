// 18)​ Faça um programa que leia um número entre 0 e 10, e escreva este número por extenso. Use o comando 
// switch. Crie um case default que escreva ‘Número fora do intervalo.’

function EscreverPorExtenso(numero) {
    switch (numero) {
        case 0:
            console.log("Zero")
            break
        case 1:
            console.log("Um")
            break
        case 2:
            console.log("Dois")
            break
        case 3:
            console.log("Três")
            break
        case 4:
            console.log("Quatro")
            break
        case 5:
            console.log("Cinco")
            break
        case 6:
            console.log("Seis")
            break
        case 7:
            console.log("Sete")
            break
        case 8:
            console.log("Oito")
            break
        case 9:
            console.log("Nove")
            break
        case 10:
            console.log("Dez")
            break
        default:
            console.log("Número fora do intervalo.")
    }
}

EscreverPorExtenso(0)
EscreverPorExtenso(1)
EscreverPorExtenso(2)
EscreverPorExtenso(3)
EscreverPorExtenso(4)
EscreverPorExtenso(5)
EscreverPorExtenso(6)
EscreverPorExtenso(7)
EscreverPorExtenso(8)
EscreverPorExtenso(9)
EscreverPorExtenso(10)
EscreverPorExtenso(11)