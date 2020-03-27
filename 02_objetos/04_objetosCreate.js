/**
 * Utilizamos Object.create para relacionar los objetos creados con los metodos
 * de esta manera nustros objetos delegaran la ejecucion de los metodos a el objeto que relacionemos
 * https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Object/create
 */

let metodoCliente = {
    saludar: function saludar() {
        return "Hola soy " + this.nombre + ", " + this.apellido;
    },
    despedir: function despedir() {
        return "Chau " + this.nombre + ", " + this.apellido
    }
}


function creaCliente(nombre, apellido) {
    let cliente = Object.create(metodoCliente)
    cliente.nombre = nombre;
    cliente.apellido = apellido;
    cliente.longitudNombre = nombre.length;
    return cliente;
}
/*
creaCliente.metodos= {
    saludar :function saludar(){
        return "Hola soy " + this.nombre+ ", " + this.apellido ;
    },
    despedir: function despedir(){
        return "Chau " + this.nombre+ ", " + this.apellido
    }
}*/

let cliente = creaCliente("maxi", "meza")
console.log(cliente.saludar(), cliente.longitudNombre)

cliente = creaCliente("maxi1", "meza")
console.log(cliente.despedir(), cliente.longitudNombre)

cliente = creaCliente("maxi2", "meza")
console.log(cliente.saludar(), cliente.longitudNombre)


cliente = creaCliente("maxi3", "meza")
console.log(cliente.saludar(), cliente.longitudNombre)