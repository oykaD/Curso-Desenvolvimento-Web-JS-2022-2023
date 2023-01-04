// 27)​ Construa uma função que receba como parâmetros as alturas e as taxas de crescimento anuais de duas 
// crianças e calcule se existe uma criança menor, caso exista se a criança menor ultrapassará a maior e em 
// quantos anos isso acontecerá. Utilize centímetros para as unidades de medida.

function calcularUltrapassagem(alturaCrianca1, taxaCrescimento1, alturaCrianca2, taxaCrescimento2) {
    if (alturaCrianca1 === alturaCrianca2) {
        console.log("As crianças tem a mesma altura atualmente.");
    } else if (alturaCrianca1 < alturaCrianca2) {
        // a criança 1 é menor
        let diferencaAltura = alturaCrianca2 - alturaCrianca1;
        let anosNecessarios = Math.ceil(diferencaAltura / (taxaCrescimento1 - taxaCrescimento2));
        if (anosNecessarios > 0) {
            console.log(`A criança 1 ultrapassará a criança 2 em ${anosNecessarios} ano(s).`);
        } else {
            console.log("A criança 1 não ultrapassará a criança 2.");
        }
    } else {
        // a criança 2 é menor
        let diferencaAltura = alturaCrianca1 - alturaCrianca2;
        let anosNecessarios = Math.ceil(diferencaAltura / (taxaCrescimento2 - taxaCrescimento1));
        if (anosNecessarios > 0) {
            console.log(`A criança 2 ultrapassará a criança 1 em ${anosNecessarios} ano(s).`);
        } else {
            console.log("A criança 2 não ultrapassará a criança 1.");
        }
    }
}

calcularUltrapassagem(100, 10, 80, 15)
calcularUltrapassagem(100, 10, 110, 5)
calcularUltrapassagem(100, 10, 100, 10)
calcularUltrapassagem(100, 10, 120, 5)