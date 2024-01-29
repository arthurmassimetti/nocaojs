const entradas = [17, 3, 24, 35, 82, 75, 65, 23, 54, 84, 1];
let i = 0;

function gets() {
    const valor = entradas[i];
    i++;
    return valor;
}

function print(texto){
    console.log(texto);

    
}

module.exports = { gets,print };