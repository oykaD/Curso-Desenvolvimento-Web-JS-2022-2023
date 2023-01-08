// Crie uma função que receba quatro números como parâmetro (numero, mínimo, máximo, 
// inclusivo) e retorne se o parâmetro numero (o primeiro) está entre mínimo e máximo. 
// Quando o parâmetro inclusivo for true, tenha "entre" como inclusivo, ou seja, considerando 
// se o número é igual a mínimo ou a máximo. Caso o parâmetro inclusivo não seja informado, 
// seu valor padrão deverá ser false, portanto, a lógica será exclusiva, não considerando se 
// numero é igual a mínimo ou a máximo.

function estaEntre(numero, minimo, maximo, inclusivo = false) {
    if (inclusivo) {
        return numero >= minimo && numero <= maximo;
    } else {
        return numero > minimo && numero < maximo;
    }
}

console.log(estaEntre(5, 1, 10))
console.log(estaEntre(5, 1, 10, true))
console.log(estaEntre(5, 1, 5))
console.log(estaEntre(5, 1, 5, true))
console.log(estaEntre(5, 6, 10))
console.log(estaEntre(5, 6, 10, true))