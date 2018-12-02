const request = require('request');

function ajax(url,cb){
    request(url,{ json: true },function (err,res,body) {
        cb(err,body)
    })

}
 
url = "https://jsonplaceholder.typicode.com/posts"
urlErr = "https://aaaajsonplaceholder.typicode.com/posts"

/**
 *  Consumir la funcion ajax para traer todos los post publicados y mostrarlos por consola usando "url"
 *  verificar que en caso de error mostremos el error por consola utilizando la "urlerr"
 *  
 *  Tener en cuenta que la funcion ajax utiliza el patron Error first por lo que necesita un callback con los argumentos error y data
 * 
 * codear debajo de este comentario
 *  */


