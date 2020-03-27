let obj1 = {
    get nombre() {
        return "que te importa";
    },
    set nombre(nombre) {
        this._nombre = nombre;
    }
}

console.log(obj1)
obj1.nombre = "pepe"
console.log(obj1)
console.log(obj1["nombre"])



/**
 * Usamos la nueva ES6 manera de escribir objetos prototipados "como si fueran" clases
*/

class Cliente {

    constructor(nombre, apellido) {
        this.nombre = nombre;
        this.apellido = apellido;
        this._titulo
    }

    get titulo() {
        return this.nombre + "lalala"
    }
    set titulo(titulo) {
        this._titulo = titulo
    }

    saludar() {
        return "Hola soy " + this.nombre + ", " + this.apellido;
    };

}


let clie = new Cliente("juan", "perez");
console.log(clie.saludar())
clie.titulo = "tit"
console.log(clie.titulo)