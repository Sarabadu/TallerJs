const request = require('request');

function ajax(url,cb){
    return new Promise(function (resolve,reject) {
        request(url,{ json: true },function (err,res,body) {
            if (err) {reject(err)}
            else {resolve(body)}
        })
        
    })

}
 
url = "https://jsonplaceholder.typicode.com/posts"
urlErr = "https://aaaajsonplaceholder.typicode.com/posts"

/**
 *  Consumir la funcion ajax para traer todos los post publicados y mostrarlos por consola usando "url"
 *  verificar que en caso de error mostremos el error por consola utilizando la "urlerr"
 *  
 *  Tener en cuenta que la funcion ajax devuelve ahora una promesa
 * 
 * codear debajo de este comentario
 *  */


function ok(res) {
    console.log("Señor Sanchez",res)
}

function ko(err) {
    console.log("Error en el pedido: ",err)
}

let p = ajax(url)

p.then(ok,ko)
