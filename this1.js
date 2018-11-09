function diceHola(){
    console.log("Hola soy " + this.name)
}


let obj = {
    name:"juan",
    apellido:this.name,
    habla: diceHola

}

//obj.habla()

let otro={
    name:"soy otro",
    queDigo:null,
    apellido:this.name
}

otro.queDigo = diceHola

//otro.queDigo()


otro.queDigo = diceHola.bind(this)
//otro.queDigo = diceHola.bind({name:"lalala"})
diceHola.call({name:"sy call"})


let x={
    "0":"0",
    "1":"1",
    "2":"2"
}

let arr = [1,2,3].map(x=>console.log(x))
mapa = Array.prototype.map.bind(x)
mapa(x=>console.log(x))

//otro.queDigo()}

function yaNoSe(){
    console.log(arguments)
}

yaNoSe(1,"aa",3)
