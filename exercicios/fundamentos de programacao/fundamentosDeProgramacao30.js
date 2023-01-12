// Elabore uma função que recebe um objeto com estudantes e suas notas. As notas de cada 
// estudante estarão num array. Você deverá calcular a média da nota de cada aluno e retornar 
// um objeto com os atributos nome e media, que indica o aluno que teve o melhor 
// desempenho nas notas.

function melhorAluno(alunos) {
    let melhorAluno = null
    let maiorMedia = 0

    for (const aluno of Object.keys(alunos)) {
        const media = alunos[aluno].reduce((a, b) => a + b) / alunos[aluno].length
        if (media > maiorMedia) {
            maiorMedia = media
            melhorAluno = { nome: aluno, media }
        }
    }
    return melhorAluno
}

let alunos = {
    "João": [10, 9, 8],
    "Maria": [9, 9, 10],
    "José": [4, 5, 6]
}

console.log(melhorAluno(alunos))