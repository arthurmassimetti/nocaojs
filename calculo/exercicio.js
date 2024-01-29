// 3) Faça um programa que calcule e imprima o salário a ser transferido para um
//funcionario.

// Para realizar o calculo receba o valor bruto do salário e o adicional dos beneficios
// O salário salario a ser transferido e calculado da seguinte maneira:

// salario a ser transferido = valor bruto do salário - percentual de imposto mediante a faixa salarial + adicional dos beneficios

// Para calcular o percentual de imposto segue as aliquotas:

// De R$ 0.00 a R$ 1100.00 - 5.00%
// De R$ 1100.01 a R$ 2500.00 10.00%
// Malor que R$ 2500.00 - 15.00%

const { gets, print } = require("./valores.js")

const valorSalarioBruto = gets();
const valorAdicionalDosBeneficios = gets();

function calcularPorcentagem(valor, percentual){
    return valor * (percentual / 100);
}

function pegarPercentualImpostoComBaseNoSalario(salario){

    if(salario >= 0 && salario <= 1100.0 ){
        return 5;
    }else if (salario >= 1100.01 && salario <= 2500){
        return 10;
    }else{
        return 15;
    }

}

print(pegarPercentualImpostoComBaseNoSalario(5000));