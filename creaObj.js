function creaObj(nombre, apellido) {
    this.name = nombre;
    this.lastName = apellido;
    return this
}

let persona = creaObj("tito", "puente")
let { name: nombre, lastName: apellido } = persona;
console.log(persona)
console.log(nombre, apellido)

let otraPersona = creaObj("josecito", "Ramirez")

console.log(otraPersona)
console.log(persona.name)