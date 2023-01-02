// 07) ​Uma das vantagens da programação é a automatização de tarefas que não gostamos de realizar. Dito isto, 
// elabore uma função cujo objetivo é resolver a fórmula de Bhaskara. Para isso, sua função deve receber três 
// parâmetros, “ax2”, “bx” e “c”, de tal modo que na equação: 3x² - 5x + 12 os valores seriam respectivamente: 3, 
// -5, 12. Como retorno deve ser passado um vetor que tem 2 valores um para cada possível resultado, mesmo 
// que os resultados sejam iguais. Caso o delta seja negativo, retorne, ao invés do vetor, um string com a frase: 
// “Delta é negativo”. 

// Bhaskara: x = (-b +/- sqrt(b^2 - 4ac)) / (2a)

function bhaskara(ax2, bx, c) {

    // Calcula o delta
    const delta = bx ** 2 - 4 * ax2 * c;

    // Verifica se o delta é negativo
    if (delta < 0) return 'Delta é negativo';

    // Calcula as raízes da equação
    const x1 = (-bx + Math.sqrt(delta)) / (2 * ax2);
    const x2 = (-bx - Math.sqrt(delta)) / (2 * ax2);

    // Retorna as raízes em um vetor
    return [x1, x2];
}

console.log(bhaskara(2, 6, 4))
console.log(bhaskara(3, -5, 12))