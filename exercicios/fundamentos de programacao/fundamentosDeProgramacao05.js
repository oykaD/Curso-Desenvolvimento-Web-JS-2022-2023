// Crie uma função que receba dois números e retorne se o primeiro é maior ou igual ao 
// segundo.

// Sem template string

function verificaMaiorOuIgual(num1, num2) {
    if (num1 >= num2) {
        return true;
    } else {
        return false;
    }
}

console.log(verificaMaiorOuIgual(5, 10))
console.log(verificaMaiorOuIgual(10, 10))
console.log(verificaMaiorOuIgual(15, 10))

// Com template string

function maiorIgual(num1, num2) {
    return `${num1} é maior ou igual a ${num2}: ${num1 >= num2}`
}

console.log(maiorIgual(5, 5))
console.log(maiorIgual(5, 4))
console.log(maiorIgual(4, 5))
