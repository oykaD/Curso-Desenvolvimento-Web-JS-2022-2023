// Você está trabalhando numa aplicação pessoal de controle de despesas. Na tela principal 
// dessa aplicação, é possível adicionar produtos ou serviços, informando nome, categoria e 
// preço. Uma funcionalidade que você está desenvolvendo no momento é a de somar o total 
// das despesas.
// Crie uma função que receba um array de produtos e retorne o total das despesas.

function calcularDespesas(produtos) {
    let total = 0
    produtos.forEach(produto => {
        total += produto.preco
    });
    return total
}

const produtos = [
    { nome: 'Sabão', categoria: 'Limpeza', preco: 3.99 },
    { nome: 'Leite', categoria: 'Alimentação', preco: 4.50 },
    { nome: 'Celular', categoria: 'Tecnologia', preco: 999.99 }
]

console.log(calcularDespesas(produtos))