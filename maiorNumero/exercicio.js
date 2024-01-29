//faça um programa que receba uma quantidade de numeros e seus respectivos valores
//imprima o maior numero par e o menor numero impar

//receber os numeros
//comparar os numeros
//trocar a variavel para o numero maior impar
//e trocar a variavel para o numero maior par

const { gets, print } = require('./entradaNumeros.js');

function encontrarMaiorParEMenorImpar(quantidade) {
    let maiorPar = Number.NEGATIVE_INFINITY;
    let menorImpar = Number.POSITIVE_INFINITY;

    for (let i = 0; i < quantidade; i++) {
        const numero = parseInt(gets());
        if (numero % 2 === 0 && numero > maiorPar) {
            maiorPar = numero;
        } else if (numero % 2 !== 0 && numero < menorImpar) {
            menorImpar = numero;
        }
    }

    return { maiorPar, menorImpar };
}

// Recebendo a quantidade de números
const quantidade = parseInt(gets());

// Encontrando o maior número par e o menor número ímpar
const { maiorPar, menorImpar } = encontrarMaiorParEMenorImpar(quantidade);

// Imprimindo os resultados
print("Maior número par: " + (maiorPar !== Number.NEGATIVE_INFINITY ? maiorPar : "Nenhum número par fornecido"));
print("Menor número ímpar: " + (menorImpar !== Number.POSITIVE_INFINITY ? menorImpar : "Nenhum número ímpar fornecido"));
