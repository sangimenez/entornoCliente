//Creamos la función alerta para que nos muestre el mensaje
function ordenAlfa() {
    let sinRepe;
    let orden;
    let mensaje;
    let palabras = [];
    let opcion = prompt("Introduce una palabra:");
    for (i = 0; opcion != null && opcion != ""; i++) {

        palabras.push(opcion);

        console.log(opcion);
        opcion = prompt("Introduce una palabra:");
    }
    sinRepe = palabras.unique();
    orden = sinRepe.sort();
    mensaje = "Ejercicio 1: " + orden.reverse();
    document.getElementById("msj").innerHTML = mensaje;
}
//eliminamos repetidos
Array.prototype.unique = function(a) {
    return function() { return this.filter(a) }
}(function(a, b, c) {
    return c.indexOf(a, b + 1) < 0
});

//funcion para ejercicio2
function mapaCade() {
    let mensaje;
    let myMap = new Map();
    let opcion = prompt("Introduce una palabra:");
    for (i = 0; opcion != null && opcion != ""; i++) {

        myMap.set(opcion);

        console.log(opcion);
        opcion = prompt("Introduce una palabra:");
    }

    mensaje = "Ejercicio 2: " + Array.from(myMap);
    document.getElementById("msj").innerHTML = mensaje;
}