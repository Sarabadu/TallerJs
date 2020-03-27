/**
 * Promise.race recibe un array de promesas y devuelve una promesa, cuando la primer promesa este resuelta
 * 
 * */


function esperar(tiempo, valor) {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            resolve(valor)
        }, tiempo);
        return;

    })
}

start = Date.now()
console.log("Start", start)

Promise.race([
    esperar(501, "1"),
    esperar(500, "2"),
    esperar(500, "3")
]).then(function (val) {
    console.log("tardo ", Date.now() - start)
    console.log(val)
})






