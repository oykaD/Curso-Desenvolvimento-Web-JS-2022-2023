// 23)​ Escreva um algoritmo que leia o código de um aluno e suas três notas. Calcule a média ponderada do 
// aluno, considerando que o peso para a maior nota seja 4 e para as duas restantes, 3. Mostre o código do 
// aluno, suas três notas, a média calculada e uma mensagem "APROVADO" se a média for maior ou igual a 5 e 
// "REPROVADO" se a média for menor que 5. Repita a operação até que o código lido seja negativo.

function calcularSituacaoAluno(codAluno, nota1, nota2, nota3) {
    let mediaFinal = (Math.max(nota1, nota2, nota3) * 4 + (nota1 + nota2 + nota3 - Math.max(nota1, nota2, nota3)) * 3) / 10;
    console.log(`Código do Aluno: ${codAluno}. Notas: ${nota1}, ${nota2}, ${nota3}. ${mediaFinal < 5 ? 'Reprovado.' : 'Aprovado.'}`)
}

calcularSituacaoAluno(14, 9, 10, 9.5)
calcularSituacaoAluno(208, 3.2, 6, 2.5)
calcularSituacaoAluno(416, 4.2, 5, 4.8)
calcularSituacaoAluno(1024, 4, 5, 6)