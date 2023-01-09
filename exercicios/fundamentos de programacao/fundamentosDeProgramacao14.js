// Desenvolva uma função que recebe como parâmetro um objeto e retorne um array de 
// arrays, em que cada elemento é um array formado pelos pares chave/valor que corresponde 
// a um atributo do objeto.

function objetoParaArray(obj) {
    let resultado = []
    for (let key in obj) {
        resultado.push([key, obj[key]])
    }
    return resultado
}

let obj = { nome: "João", idade: 25, cidade: "Rio de Janeiro" }

console.log(objetoParaArray(obj))