// 16)​ Utilizando a estrutura do Switch faça um programa que simule uma calculadora básica. O programa recebe 
// como parâmetros dois valores numéricos e uma string referente à operação e a realize com os valores 
// numéricos na ordem que foram inseridos. Por exemplo: calculadora (2, ‘+’, 3). A função efetuará a soma de 2 e 
// 3. Dica: Os sinais das operações são: ‘+’. ‘-’, ‘*’ e ‘/’.  Crie um caso default para operações inválidas.

function calculadora(valor1, operacao, valor2) {
    switch (operacao) {
        case "+":
            console.log(valor1 + valor2);
            break;
        case "-":
            console.log(valor1 - valor2);
            break;
        case "*":
            console.log(valor1 * valor2);
            break;
        case "/":
            console.log(valor1 / valor2);
            break;
        default:
            console.log('Operação inválida');
    }
}

calculadora(2, "+", 3)
calculadora(5, "-", 1)
calculadora(4, "*", 5)
calculadora(9, "/", 3)
calculadora(3, "%", 2)