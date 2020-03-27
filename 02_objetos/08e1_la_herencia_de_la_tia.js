/* Crear una "clase" Persona y luego 2 hijos, Profesor, Estudiante
 *  - de deben heredar propiedades y metodos
 *  - se tiene que sobrescribir algun metodo
 * todo esto sin usar la palabra clave "class"
*/

function Persona(nombre, apellido) {
    this.nombre = nombre;
    this.apellido = apellido;
}

Persona.prototype.saludar = function saludar(p1, p2, p3) {
    return "Hola soy " + this.nombre + p1 + p2 + p3;
}

function Profesor(profesion) {
    Persona.call(this, "Juan Pablo", "Garcia");
    this.profesion = profesion;
}

Profesor.prototype = Object.create(Persona.prototype);

Profesor.prototype.calificar = function calificar() {
    return "Tas aprobado pibe";
}

function Estudiante(promedio) {
    Persona.call(this, "Franco", "Brandetti");
    this.promedio = promedio;
}

Estudiante.prototype = Object.create(Persona.prototype);

Estudiante.prototype.saludar = function saludar(pepe) {
    console.log("hola mira que me exploto eh!")
    return Persona.prototype.saludar.apply(this) + " y mi promedio es" + this.promedio;
}

let profe = new Profesor("Experto en cosas");
console.log(profe.saludar());
console.log(profe.profesion);

let estudiante = new Estudiante(10);
console.log(estudiante.saludar());