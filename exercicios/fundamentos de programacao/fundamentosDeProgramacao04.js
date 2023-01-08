// Crie uma função que recebe um número (de 1 a 12) e retorne o mês correspondente como 
// uma string, por exemplo, se a entrada for 2, a função deverá retornar "fevereiro", pois este é 
// o 2º mês.

function obterMes(numMes) {
    const meses = ["janeiro", "fevereiro", "março", "abril", "maio", "junho", "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"];
    if (numMes < 1 || numMes > 12) {
        return "Mês inválido!";
    }
    return meses[numMes - 1];
}

console.log(obterMes(1))
console.log(obterMes(2))
console.log(obterMes(3))
console.log(obterMes(12))
console.log(obterMes(13))
