/*
1 -  crie uma classe para representar carros
os carros possuem uma marca, uma cor e um gasto médio de comebustivel por kilometro rodado.
*/ 

class Carro{
    marca;
    cor;
    gastoMedioPorKm;

    constructor(marca,cor,gastoMedioPorKm){
        this.marca = marca;
        this.cor = cor;
        this.gastoMedioPorKm = gastoMedioPorKm;
    }

    calcularGastoDePercursor(distanciaEmKm, precoCombustivel){
        return distanciaEmKm * this.gastoMedioPorKm * precoCombustivel;
    }
}

const uno = new Carro("Fiat", "vermelho", 1/12);
const palio = new Carro("Fiat", "Prata", 1/10);
const audi = new Carro("Audi tt", "Branco", 1/6);
const vectrar = new Carro("Chevrolet", "Cinza", 1/9);

console.log(audi.calcularGastoDePercursor(70, 5.23));
