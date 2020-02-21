function Cliente(nombre, apellido) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.longitudNombre = nombre.length;

}

Cliente.prototype.saludar = function saludar() {
    return "Hola " + this.nombre + ", " + this.apellido;
};
Cliente.prototype.despedir = function despedir() {
    return "Chau " + this.nombre + ", " + this.apellido
}


// Herencia de propiedades...
function ClienteAmigo(apellido, deDondeLoConozco) {
    Cliente.call(this, "cacho", apellido);

    this.conocidoEn = deDondeLoConozco || "tu casa";
}


// Herencia de metodos
ClienteAmigo.prototype = Object.create(Cliente.prototype); // se crea un objeto nuevo

// podemos sobreescribir un metodo
ClienteAmigo.prototype.saludar = function saludar() {
    return `que hace' ${this.nombre} como andan las cosas por ${this.conocidoEn}`
}


let amigo = new ClienteAmigo("Perez", "la cancha")

console.log(amigo.saludar())
console.log(amigo.despedir())

let clie = new Cliente("Juan", "Perez")

console.log(clie.saludar())
console.log(clie.despedir())