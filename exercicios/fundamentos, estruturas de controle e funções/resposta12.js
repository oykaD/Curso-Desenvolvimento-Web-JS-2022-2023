// 12)​ Faça um algoritmo que calcule o fatorial de um número.

function fatorial(num) {
    if (num === 0 || num === 1) {
        return 1;
    }
    return num * fatorial(num - 1);
}

console.log(fatorial(5))