// 04) ​Crie uma função que irá receber dois valores, o dividendo e o divisor. A função deverá imprimir o resultado 
// e o resto da divisão destes dois valores.

function divisao(dividendo, divisor) {
    console.log(`Resultado: ${Math.floor(dividendo / divisor)}`); // Math.floor é importante para não deixar os números quebrados
    console.log(`Resto: ${dividendo % divisor}`);
}

divisao(10, 3);
divisao(100, 25);
divisao(500, 40);