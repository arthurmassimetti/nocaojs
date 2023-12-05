class Pessoa{
    nome;
    peso;
    altura;
    
    constructor(nome,peso,altura){
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    
    }
    calcularImc(){
        return this.peso / (this.altura * this.altura);
    }

    classificarImc(){
        const Imc = this.calcularImc();
        if(Imc < 18.5){
            return("abaixo do peso")
        }else if(Imc >= 18.5 && Imc < 25){
            return("Peso normal")
        }else if(Imc >= 25  && Imc < 30){
            return("Acima do peso")
        }else if(Imc >= 30 && Imc <40){
            return("Obeso")
        }else{
            return("Obesidade grave")
        }
        
    }
}
const jose = new Pessoa("Jose", 70, 1.75);
const renan = new Pessoa("Renan", 80, 1.80);
const arthur = new Pessoa ("Arthur", 86, 1.78);
console.log(jose.calcularImc());
console.log(jose.classificarImc());
console.log(renan.calcularImc());
console.log(renan.classificarImc());
console.log(arthur.calcularImc());
console.log(arthur.classificarImc())



