// Faça uma função que recebe a base e a altura de um triângulo e retorne a área desse 
// triângulo. A precisão deverá ser de duas casas decimais, arredondando se necessário.

function calcularAreaTriangulo(base, altura) {
    return Number(((base * altura) / 2).toFixed(2))
}

console.log(calcularAreaTriangulo(10, 5))
console.log(calcularAreaTriangulo(20, 4))
console.log(calcularAreaTriangulo(3, 7))