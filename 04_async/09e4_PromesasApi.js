const request = require('request');

function ajax(url) {
    return new Promise(function (resolve, reject) {
        request(url, { json: true }, function (err, res, body) {
            if (err) { reject(err) }
            else { resolve(body) }
        })

    })

}

urlpost = "https://jsonplaceholder.typicode.com/posts?userId:={numero_de_cliente}"
urlcoment = "https://jsonplaceholder.typicode.com/posts/{id_post}/comments"

/**
 *  Consumir la funcion ajax para traer todos los post publicados del cliente 2 y luego obtener los comentarios de ese post y mostrarlos por consola
 *    
 *  Tener en cuenta que la funcion ajax devuelve ahora una promesa
 * 
 * codear debajo de este comentario
 *  */

ajax(urlpost).then((res) => {
    let id = res[0].id;
    return ajax("https://jsonplaceholder.typicode.com/posts/" + id + "/comments")
}).then((res) => console.log(res));