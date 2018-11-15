/***************************************** */

function esperar(tiempo, valor){
    return new Promise(function(resolve,reject){
            setTimeout(()=>{
                resolve(valor)
            }, tiempo);
            return;

    })
}


async function asy(val){
    let a =   await esperar(100,2);
    let  b = await esperar(200,1)
    return a * b * val;
}

asy(5).then(
    function(data){
        console.log("aqui estoy " , data);
        
    })