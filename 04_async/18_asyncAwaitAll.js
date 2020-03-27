/**
 * Promise.all recibe un array de promesas y devuelve una promesa, la cual esta resuelta cuando todas las promesas terminan
 * 
 * */


function esperar(tiempo, valor) {
    return new Promise(function (resolve, reject) {
        console.log("comienza ", valor)
        setTimeout(() => {
            console.log("termina", valor)
            resolve(valor)
        }, tiempo);
        return;

    })
}


start = Date.now()
console.log("Start", start)

async function asy() {
    let p1 = esperar(100, "1")
    let p2 = esperar(5000, "2")
    let p3 = esperar(5, "3")
    let p4 = esperar(5000, "4")
    let r1 = await p1
    let r2 = await p2
    let r3 = await p3
    let r4 = await p4

    return [r1, r2, r3, r4]
}

asy().then(function ([a, b, c, d]) {
    console.log("tardo ", Date.now() - start)
    console.log(a, b, c, d)
})
start = Date.now()
console.log("Start", start)


/*
Promise.all([
    esperar(100,"1"),
    esperar(5000,"2"),
    esperar(5,"3"),
    esperar(5000,"4"),
]).then(function ([a,b,c,d]) {
    console.log( "tardo " ,Date.now() - start)
    console.log(a,b,c,d)
})



*/

