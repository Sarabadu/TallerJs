/**
 * Promise.all recibe un array de promesas y devuelve una promesa, la cual esta resuelta cuando todas las promesas terminan
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

Promise.all([
    esperar(100,"1"),
    esperar(200,"2"),
    fallaren(300,"3"),
    esperar(5,"4"),
    esperar(5000,"5")
]).then(function ([a,b,c]) {
    console.log( "tardo " ,Date.now() - start)
    console.log(a,b,c)
}).catch(function (error) {
    console.log("Fallo una promesa en ",Date.now() - start)
})






