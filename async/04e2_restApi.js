const request = require('request');

function ajax(url,cb){
    request(url,{ json: true },function (err,res,body) {
        cb(err,body)
    })

}
 
//urlpost= "https://jsonplaceholder.typicode.com/posts?userId=1"
urlpost= "https://jsonplaceholder.typicode.com/posts?userId="
urlcoment = "https://jsonplaceholder.typicode.com/posts/3/comments"
urlcoment = "https://jsonplaceholder.typicode.com/posts/3/comments"
/**
 *  Consumir la funcion ajax para traer todos los post publicados del cliente 2 y luego obtener los comentarios de ese post y mostrarlos por consola
 *    
 *  Tener en cuenta que la funcion ajax utiliza el patron Error first por lo que necesita un callback con los argumentos error y data
 * 
 * codear debajo de este comentario
 *  */
