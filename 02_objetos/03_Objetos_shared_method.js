/**
 *  creamos un Objeto  metodoCliente que contenga todas las funciones
 *  de esta manera referenciamos a las funciones en vez de crear una nueva con cada cliente
 *  y nos quedan agrupadas en un objeto 
 * */

let metodoCliente = {
    saludar: function saludar() {
        return "Hola soy " + this.nombre + ", " + this.apellido;
    },
    despedir: function despedir() {
        return "Chau " + this.nombre + ", " + this.apellido
    }
}


function creaCliente(nombre, apellido) {
    let cliente =
    {
        nombre: nombre,
        apellido: apellido,
    }
    cliente.despedir = metodoCliente.despedir,
        cliente.longitudNombre = nombre.length
    cliente.saludar = metodoCliente.saludar;
    return cliente;
}

let cliente = creaCliente("maxi", "meza")
console.log(cliente.saludar(), cliente.longitudNombre)

cliente = creaCliente("maxi1", "meza")
console.log(cliente.despedir(), cliente.longitudNombre)

cliente = creaCliente("maxi2", "meza")
console.log(cliente.saludar(), cliente.longitudNombre)
cliente = creaCliente("maxi3", "meza")
console.log(cliente.saludar(), cliente.longitudNombre)