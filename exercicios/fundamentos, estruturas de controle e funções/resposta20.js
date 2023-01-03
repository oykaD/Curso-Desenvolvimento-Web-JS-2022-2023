// 20)​ Crie um programa para informar quais e quantas notas são necessárias para entregar o mínimo de cédulas 
// para um determinado valor informado pelo usuário considerando notas de R$ 100, R$ 50, R$ 10 e R$ 5 e R$ 1. 
// Seu programa deve mostrar apenas as notas utilizadas. Por exemplo, ao solicitar R$18, o programa deve 
// informar apenas a seguinte informação (note que não foram exibidas informações sobre as demais cédulas): 1 
// nota(s) de R$ 10. 1 nota(s) de R$ 5. 3 nota(s) de R$ 1.

function entregarNotas(valor) {
    let notas = [100, 50, 10, 5, 1];
    let quantidadeNotas = [];

    for (let i = 0; i < notas.length; i++) {
        let quantidade = Math.floor(valor / notas[i]);
        if (quantidade > 0) {
            valor -= quantidade * notas[i];
            quantidadeNotas.push(`${quantidade} nota(s) de R$ ${notas[i]}`);
        }
    }

    return quantidadeNotas;
}

console.log(entregarNotas(18))