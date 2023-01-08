// Desenvolva uma função que recebe dois parâmetros, um é a quantidade de horas 
// trabalhadas por um funcionário num mês, e o quanto ele recebe por hora. O retorno da 
// função deve ser a string "Salário igual a R$ X", em que X é o quanto o funcionário ganhou 
// no mês.

function calcularSalario(horasTrabalhadas, salarioPorHora) {
    return `Salário igual a R$ ${(horasTrabalhadas * salarioPorHora).toFixed(2)}`
}

console.log(calcularSalario(160, 15))
console.log(calcularSalario(200, 15))
console.log(calcularSalario(160, 20))
console.log(calcularSalario(100, 15))
