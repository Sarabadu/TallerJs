/**
 *  Ecritura de objetos en linea, con {}
 */

let cliente = {
    nombre: "maxi",
    apellido: "meza", 
    saludar(){
        return "Hola soy " + this.name + ", " + this.apellido ;
        },
   longitudNombre:4
}

cliente.saludar() // "Hola soy ... , ..."

function saludar(){
    return "Hola soy " + this.name + ", " + this.apellido ;
}




function creaCliente(){
    
}