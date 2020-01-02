/**
 * Promise.race recibe un array de promesas y devuelve una promesa, cuando la primer promesa este resuelta
 * 
 * */

function fallaren(tiempo, valor){
    return new Promise(function(resolve,reject){
            setTimeout(()=>{
                reject("error")
            }, tiempo);
            return;

    })
}

function esperar(tiempo, valor){
    return new Promise(function(resolve,reject){
            setTimeout(()=>{
                resolve(valor)
            }, tiempo);
            return;

    })
}

start = Date.now()
console.log("Start",start)

Promise.race([
    esperar(100,"1"),
    esperar(5000,"2"),
    fallaren(200,"3"),
    esperar(5000,"4")
]).then(function (val) {
    console.log( "tardo " ,Date.now() - start)
    console.log(val)
}).catch(function (error) {
    console.log("Fallo una promesa en ",Date.now() - start)
})






