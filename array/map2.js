const carrinho = [
    '{ "nome": "Borracha", "preco": 3.45 }',
    '{ "nome": "Caderno", "preco": 13.90 }',
    '{ "nome": "Kit de Lapis", "preco": 41.22 }',
    '{ "nome": "Caneta", "preco": 7.50 }',
]

// Retornar um array apenas com os preços

// Minha Resposta

const resultado = carrinho.map(function (item) {
    const objeto = JSON.parse(item)
    return objeto.preco
})

console.log(resultado)

// Resposta do Professor

// const paraObjeto = json => JSON.parse(json)
// const apenasPreco = produto => produto.preco

// const resultado = carrinho.map(paraObjeto).map(apenasPreco)
// console.log(resultado)