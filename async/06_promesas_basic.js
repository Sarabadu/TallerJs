/**
 * Promesas
 * no les puedo prometer nada....
 *  */

let pedido = new Promise(  function (resolver,rechazar){resolver("aqui tiene su hamburgesa ")})

pedido.then(function (res) {
    console.log("Señor Sanchez",res)
})



/*let prom2 = Promise.resolve("arranco resuelta, pero sigo siendo una promesa")

console.log("promesa resuelta",prom2)
*/

let pedido = new Promise(  function (resolver,rechazar){rechazar("nos quedamos sin mayonesa")})

function ok(res) {
    console.log("Señor Sanchez",res)
}
function ko(err) {
    console.log("Error en el pedido: ",err)
}

pedido.then(ok,ko)

pedido.then(function (res) {
    console.log("Señor Sanchez",res)
},function (err) {
    console.log("Error en el pedido: ",err)
})



let prom2 = Promise.reject("arranco resuelta, pero sigo siendo una promesa")

console.log("promesa resuelta",prom2)


