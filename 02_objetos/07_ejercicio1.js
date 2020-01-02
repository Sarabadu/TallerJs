
function Cliente(nombre,apellido){

    this.nombre=nombre;
    this.apellido=apellido;   
    this.longitudNombre=nombre.length;


}

Cliente.prototype.saludar =function saludar(){
    return "Hola soy " + this.nombre+ ", " + this.apellido ;
};

/**
 * Editando a partir de esta linea reemplazar la palabra clave "new" con una funcion
 * para que :
 *  New(Cliente,["Juan","Garcia"])  == new Cliente("Juan","Garcia")
 * 
 * */ 
