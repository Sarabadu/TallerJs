function *gen(){
    console.log("empezo el generador")
    yield 1
    console.log("holaaa")
    yield 2
    yield 3
    console.log("chauuu")
    return 4

} 

iterador = gen()

console.log("0")

console.log("1",iterador.next())

console.log("2",iterador.next())

console.log("3",iterador.next())

console.log("4",iterador.next())