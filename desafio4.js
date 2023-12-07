//crie um programa que seja capaz de percorrer uma lisat de numeros e imprima cada numero par encontrado

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 10, 11, 12, 13, 14,]

for (let i = 0; i < numeros.length; i++) {
   const numeroPar = numeros[i]   
   if (numeroPar %2===0){
    console.log(numeroPar)
   }
}