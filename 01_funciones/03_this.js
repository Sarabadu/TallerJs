/* quien es this? */
//name = "juan"
//this.name = "pepe";

//diceHola()


function diceHola() {
   console.log("Hola soy " + this.name)
}

/*****************************************************************************/
// let obj = {
//     name: "juan",
//     apellido: this.name,
//     habla: diceHola

// }

//obj.habla()
//console.log(obj.apellido)

/*****************************************************************************/

// let otro = {
//     name: "soy otro",
//     queDigo: null,
//     apellido: this.name
// }

//otro.queDigo = diceHola

//otro.queDigo()



/*****************************************************************************/
/*******************************BIND******************************************/
//this.name = "renzo"
//otro.queDigo = diceHola.bind(this)




//otro.queDigo = diceHola.bind({ name: "lalala" })
//otro.queDigo()




/*****************************call********************************************/
//diceHola.call({ name: "sy call" })



/*****************************************************************************/
// let f = {
//     0: "0",
//     1: "1",
//     2: "2",
//     length: 3
// }

// let arr = [1, 2, 3].map(x => console.log(x))
// function a(z) { console.log(z) }

// let mapa = Array.prototype.map.bind(f)


// mapa(a)


