//creamos funciones con máximo y mínimo de los números que podran salir en la primitiva (devolverá número entero)
function RandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
//declaramos la cantidad de números de la primitiva que queremos
let cantidadPrimitivas = 50;
//hacemos un bucle para que nos devueva la cantiad de primitivas que nos piden
//nos devolvera 50 posibles combinaciones de la primitva
for (let x = 0; x <= cantidadPrimitivas; x++) {
    //declaramos cuantos números tendra la primitiva
    let numPrim = 6;
    //declaramos un array vacío para los números aleatorios
    let arrayPrimitiva = [];
    //mientras la longitud del array sea menor que la cantidad de números
    while (arrayPrimitiva.length < numPrim) {
        //numeroAleatorio será un número entre 1 y 49
        let numeroAleatorio = RandomNumber(1, 49);
        let existe = false;
        for (let i = 0; i < arrayPrimitiva.length; i++) {
            if (arrayPrimitiva[i] == numeroAleatorio) {
                existe = true;
                break;
            }
        }
        if (!existe) {
            arrayPrimitiva[arrayPrimitiva.length] = numeroAleatorio;
        }
    }
    //mostramos por consola los números
    console.log("Números de la primitiva: " + arrayPrimitiva);
}