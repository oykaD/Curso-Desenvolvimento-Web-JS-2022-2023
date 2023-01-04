// 40) ​Faça uma função que receba como parâmetro um vetor de notas e mostre os conceitos de cada uma de 
// modo que de 0,0 a 4,9 seja atribuído o conceito D, de 5,0 a 6,9 seja atribuído o conceito C, de 7,0 a 8,9 o 
// conceito B e de 9,0 a 10,0 o conceito A.

function conceitoNotas(notas) {
    for (let nota of notas) {
        if (nota >= 0 && nota < 5) {
            console.log(`Nota ${ nota }: Conceito D`)
        } else if (nota >= 5 && nota < 7) {
            console.log(`Nota ${ nota }: Conceito C`)
        } else if (nota >= 7 && nota < 9) {
            console.log(`Nota ${ nota }: Conceito B`)
        } else if (nota >= 9 && nota <= 10) {
            console.log(`Nota ${ nota }: Conceito A`)
        } else {
            console.log(`Nota ${ nota }: Inválida`)
        }
    }
}

conceitoNotas([9.5, 7.3, 5.4, 3.1, 10.0, 11.5])