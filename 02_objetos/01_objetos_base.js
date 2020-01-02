/**
 *  Ecritura de objetos en linea, con {}
 */

let cliente = {
    nombre: "maxi",
    apellido: "meza", 
    saludar(){
        return "Hola soy " + this.nombre + ", " + this.apellido ;
        },
   longitudNombre:4
}

let result = cliente.saludar() // "Hola soy ... , ..."

console.log('result:', result);

/*
function saludar(){
    return "Hola soy " + this.nombre + ", " + this.apellido ;
}
*/
