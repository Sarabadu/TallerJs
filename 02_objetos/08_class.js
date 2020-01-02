/**
 * Usamos la nueva ES6 manera de escribir objetos prototipados "como si fueran" clases
 *  dado que el instructor no tenia mucha practica con clases, les deja la documentacion:
 * que se diviertan: https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Classes 
 */

class Cliente{
    
    constructor(nombre,apellido){
        this.nombre = nombre;
        this.apellido = apellido;
        this._titulo
    }
    
    get titulo(){ 
        return this.nombre + "lalala" 
    }
    set titulo( titulo){
        this._titulo = titulo 
    }

    saludar(){
        return "Hola soy " + this.nombre+ ", " + this.apellido ;
    };

}


let clie = new Cliente("juan","perez");
console.log(clie.saludar())
clie.titulo = "tit"
console.log(clie.titulo)