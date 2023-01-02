// 08) ​Pedro joga N jogos de basquete por temporada. Para saber como está ele está progredindo, ele mantém 
// registro de todos os as pontuações feitas por jogo. Após cada jogo ele anota no novo valor e confere se o 
// mesmo é maior ou menor que seu melhor e pior desempenho. Dada uma lista string = “pontuação1 pontuação2 
// pontuação3 etc..”, escreva uma função que ao recebê-la irá comparar os valores um a um e irá retornar um 
// vetor com o número de vezes que ele bateu seu recorde de maior número de pontos e quando fez seu pior 
// jogo. (Número do pior jogo). 
// Obs.: O primeiro jogo não conta como novo recorde do melhor. 
// Exemplo: 
// String: “10 20 20 8 25 3 0 30 1” 
// Retorno: [3, 7] (Significa que ele bateu três vezes seu recorde de melhor pontuação e a pior pontuação 
// aconteceu no sétimo jogo.)

function jogos(string) {
    const pontuacoes = string.split(' ');
    let melhorDesempenho = pontuacoes[0];
    let piorDesempenho = pontuacoes[0];
    let vezesRecordes = 0;

    // Percorre o array de pontuações a partir do segundo elemento
    for (let i = 1; i < pontuacoes.length; i++) {
        const pontuacao = pontuacoes[i];

        // Se a pontuação atual for maior que o melhor desempenho
        // até o momento, atualiza o melhor desempenho e incrementa
        // o contador de vezes que o recorde foi batido
        if (pontuacao > melhorDesempenho) {
            melhorDesempenho = pontuacao;
            vezesRecordes++;
        }

        // Se a pontuação atual for menor que o pior desempenho
        // até o momento, atualiza o pior desempenho
        if (pontuacao < piorDesempenho) {
            piorDesempenho = pontuacao;
        }
    }

    // Encontra o índice do pior jogo na string original
    const indicePiorJogo = pontuacoes.indexOf(piorDesempenho);

    // Retorna o vetor com o número de vezes que o recorde foi batido
    // e o índice do pior jogo (somando 1 para ajustar a contagem)
    return [vezesRecordes, indicePiorJogo + 1];
}

console.log(jogos("10 20 20 8 25 3 0 30 1"))
console.log(jogos("10 15 10 20 15 20 10"))
console.log(jogos("10 20 30 40 50"))