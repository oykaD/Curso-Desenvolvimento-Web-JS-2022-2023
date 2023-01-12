// Desenvolva uma função que recebe um objeto como parâmetro e retorne um outro objeto 
// que corresponde ao objeto recebido como parâmetro, porém com as posições das chaves e 
// valores invertidas.

function inverterChavesValores(obj) {
    // Obtém os pares chave/valor do objeto
    const paresChaveValor = Object.entries(obj)

    // Inverte as posições dos pares
    const paresInvertidos = paresChaveValor.map(([chave, valor]) => [valor, chave])

    // Cria um novo objeto com os pares invertidos
    return Object.fromEntries(paresInvertidos)
}

const obj = { nome: 'João', idade: 30 }
const objInvertido = inverterChavesValores(obj)

console.log(objInvertido) // { 'João': 'nome', 30: 'idade' }