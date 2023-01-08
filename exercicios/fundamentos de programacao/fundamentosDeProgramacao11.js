// Crie uma função que receba um array e retorne o primeiro e o último elemento desse array 
// como um novo array.

function obterPrimeiroEUltimoElemento(array) {
    return [array[0], array[array.length - 1]]
  }

let meuArray = [1, 2, 3, 4, 5]
let resultado = obterPrimeiroEUltimoElemento(meuArray)

console.log(resultado)