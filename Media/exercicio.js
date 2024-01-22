// programa para medias
// caso a media seja < 5 imprima reprovado
// caso a media seja >= 5 e < 7 imprima recuperação
// caso a media seja >=7 imprima aprovado

const { gets, print } = require('./funcoes -auxiliares-ex1.js')

const media = gets();

if (media < 5){
    print("Reprovado, estude mais :)")
}else if (media > 5 && media < 7){
    print("Você está de recuperação, sua chance de se redmir")
}else{
    print("Você está aprovado, parabens :)")
}


