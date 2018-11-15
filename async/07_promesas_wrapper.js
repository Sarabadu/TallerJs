/**
 * Les prometo que es un quilombo 
 * */


function obtenerCliente(id){
    return new Promise(function(resolve,reject){
            if (id <= 0){
                setTimeout(()=>{ 
                    reject("Error cliente no existe")
                }, 500);
                return;
            }
            setTimeout(()=>{
                resolve({id:id,cuenta:120+id})
            }, 500);
            return;

    })
}

prom  = obtenerCliente(1)
.then(
    function (data) {
        console.log("Data1:", data)
    },
    function err(err) {
        console.log("Error: ", err)
    })

console.log("Me ejecute enseguida",prom)

setTimeout(() => {
    console.log("espero un loop",prom)
}, 0);

setTimeout(() => {
    console.log("espero un 600ms ",prom)
}, 600);

setTimeout(() => {
    prom.then(a=>console.log("la promesa termino hace rato",a))
}, 600);
