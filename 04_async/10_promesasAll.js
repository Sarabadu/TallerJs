/**
 * Promise.all recibe un array de promesas y devuelve una promesa, la cual esta resuelta cuando todas las promesas terminan
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

Promise.all([
    esperar(100, "1"),
    esperar(5000, "2"),
    esperar(5, "3"),
    esperar(5000, "4"),
]).then(function ([a, b, c, d]) {
    console.log("tardo ", Date.now() - start)
    console.log(a, b, c, d)
})






