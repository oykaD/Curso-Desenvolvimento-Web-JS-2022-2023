// 06)​ Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. A 
// primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda 
// retornará o valor da aplicação sob o regime de juros compostos.

// Função para calcular juros simples
function jurosSimples(capital, taxa, tempo) {
    return capital * (1 + taxa * tempo);
}

// Função para calcular juros compostos
function jurosCompostos(capital, taxa, tempo) {
    return capital * Math.pow((1 + taxa), tempo);
}

// Exemplos de uso das funções
console.log(jurosSimples(100, 0.1, 2))
console.log(jurosCompostos(100, 0.1, 2))