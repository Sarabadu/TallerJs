const request = require('request');

function ajax(url) {
    return new Promise(function (resolve, reject) {
        request(url, { json: true }, function (err, res, body) {
            if (err) { reject(err) }
            else { resolve(body) }
        })

    })

}

todos = "https://jsonplaceholder.typicode.com/users/{clie}/todos"
posts = "https://jsonplaceholder.typicode.com/users/{clie}/posts"
cliente = "https://jsonplaceholder.typicode.com/users/{clie}"


/**
 *  Consumir la funcion ajax para traer los todo, post y datos del cliente 1 luego mostrar por consola todo junto
 *    
 *  Tener en cuenta que la funcion ajax devuelve ahora una promesa
 * 
 * codear debajo de este comentario
 * 
 *  */
Promise.all([
    ajax("https://jsonplaceholder.typicode.com/users/1/todos"),
    ajax("https://jsonplaceholder.typicode.com/users/1/posts"),
    ajax("https://jsonplaceholder.typicode.com/users/1")
]).then(([a, b, c]) => console.log(a, b, c));

