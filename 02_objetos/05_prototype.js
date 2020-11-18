/**
 *  Reemplazamos el objeto "metodoCliente" por la propiedad prototype de la funcion constructora
 *  todas las funciones en Js tienen la propiedad "prototype" y esta pensada para tener las propiedades aka metodos
 *  que queremos que nuestros objetos referencien 
 * 
 */

function creaCliente(nombre, apellido) {
    let cliente = Object.create(creaCliente.prototype)
    cliente.nico = "alto alto"
    cliente.nombre = nombre;
    cliente.apellido = apellido;
    cliente.longitudNombre = nombre.length;
    return cliente;
}
console.log(creaCliente.name)




creaCliente.prototype.saludar = function saludar() {
    return "Hola soy " + this.nombre + ", " + this.nico;
};
creaCliente.prototype.despedir = function despedir() {
    return "Chau " + this.nombre + ", " + this.apellido
}
creaCliente.prototype.nico = "cortito"

console.log(creaCliente.prototype)












let cliente = creaCliente("maxi", "meza")
console.log(cliente.saludar(), cliente.longitudNombre)
console.log(cliente.nico)
cliente = creaCliente("maxi1", "meza")
console.log(cliente.despedir(), cliente.longitudNombre)

cliente = creaCliente("maxi2", "meza")
console.log(cliente.saludar(), cliente.longitudNombre)
cliente = creaCliente("maxi3", "meza")
console.log(cliente.saludar(), cliente.longitudNombre)

