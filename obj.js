//"use strict"
function creaObj(nombre, apellido){
    this.name = nombre;
    this.lastName = apellido;
     return this
}

let persona =   creaObj("tito","puente")
let {name:nombre,lastName:apellido} = persona;
console.log(persona)
console.log(nombre,apellido)

let otraPersona =  creaObj("josecito","Ramirez")

console.log(otraPersona.name)
console.log(persona.name)

let otraPersonaMas = new creaObj("jose","sanchez")
console.log(otraPersona.name)
console.log(persona.name)
console.log(otraPersonaMas)

