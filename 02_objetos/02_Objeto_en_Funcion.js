/**
 *  creamos una funcion que nos devuelva nuevos clientes 
 */


function creaCliente(nombre,apellido){
    let cliente = {
        nombre:nombre,
        apellido:apellido, 
        saludar(){
            return "Hola soy " + this.nombre+ ", " + this.apellido ;
        },
        longitudNombre:nombre.length
    }
    return cliente;
}

let cliente = creaCliente("maxi", "meza")
console.log(cliente.saludar(), cliente.longitudNombre)
cliente = creaCliente("maxi1", "meza")
console.log(cliente.saludar(), cliente.longitudNombre)

cliente = creaCliente("maxi2", "meza")
console.log(cliente.saludar(), cliente.longitudNombre)
cliente = creaCliente("maxi3", "meza")
console.log(cliente.saludar(), cliente.longitudNombre)