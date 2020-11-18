function* gen() {
    console.log("Preparando las porristas")
    let primera = yield "Dame una J"
    let segunda = yield "Dame una S"
    let prueba = (yield "primero") + (yield "segundo ")
    console.log("si me sale esto me retiro", prueba);

    return "Que formamos: " + primera + segunda

}

let iterador = gen()



// console.log(iterador.next())
// console.log(iterador.next("J"))
// console.log(iterador.next("s"))
// iterador.next(5)
// iterador.next(10)





/*****************************************************************************/
// function* gen2() {

//     let primera = yield
//     let suma = primera + (yield)

//     return (yield) + suma

// }

// let it2 = gen2()

// console.log(it2.next())
// console.log(it2.next(1))
// console.log(it2.next(2))
// it2.return("pepe")

// console.log(it2.next("La suma es: "))