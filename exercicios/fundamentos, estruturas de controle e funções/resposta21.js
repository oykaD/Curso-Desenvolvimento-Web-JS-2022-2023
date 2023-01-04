// 21)​ Criar um programa para identificar o valor a ser pago por um plano de saúde dada a idade do conveniado 
// considerando que todos pagam R$ 100 mais um adicional conforme a seguinte tabela: 1) crianças com menos 
// de 10 anos pagam R$80; 2) conveniados com idade entre 10 e 30 anos pagam R$50; 3) conveniados com 
// idade acima de 30 e até 60 anos pagam R$ 95; e 4) conveniados acima de 60 anos pagam R$130

function valorPlanoSaude(idade) {
    // Valor base de todos os planos é de R$100
    let valor = 100;

    // Verifica a faixa etária do conveniado e aplica o adicional
    switch (true) {
        case idade < 10:
            valor += 80;
            break;
        case idade >= 10 && idade <= 30:
            valor += 50;
            break;
        case idade > 30 && idade <= 60:
            valor += 95;
            break;
        case idade > 60:
            valor += 130;
            break;
    }

    return valor;
}

console.log(valorPlanoSaude(5))
console.log(valorPlanoSaude(15))
console.log(valorPlanoSaude(45))
console.log(valorPlanoSaude(65))