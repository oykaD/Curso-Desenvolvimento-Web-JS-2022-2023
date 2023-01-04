// 33) ​Crie três vetores, chamados vetorInteiro, vetorString e vetorDouble. Cada um destes vetores deverá conter 
// quatro valores, sendo o primeiro com valores inteiros, o segundo com strings e o terceiro com valores decimais. 
// Declarados os vetores, utilize a função de união concat() de duas maneiras diferentes para unir os vetores, e 
// mostre o resultado no console. Todos os elementos do vetor resultado deverão aparecer no console.

// Cria os vetores
let vetorInteiro = [1, 2, 3, 4]
let vetorString = ['a', 'b', 'c', 'd']
let vetorDouble = [1.1, 2.2, 3.3, 4.4]

// Unindo os vetores usando concat() de forma normal
let resultado1 = vetorInteiro.concat(vetorString, vetorDouble)

// Unindo os vetores usando concat() de forma spread
let resultado2 = [...vetorInteiro, ...vetorString, ...vetorDouble]

// Imprimindo os resultados no console
console.log(resultado1)
console.log(resultado2)