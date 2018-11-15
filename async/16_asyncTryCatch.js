/***************************************** */

function esperar(tiempo, valor){
    return new Promise(function(resolve,reject){
            setTimeout(()=>{
                resolve(valor)
            }, tiempo);
            return;

    })
}

function fallaren(tiempo, valor){
    return new Promise(function(resolve,reject){
            setTimeout(()=>{
                reject("error")
            }, tiempo);
            return;

    })
}


async function asy(val){
    try {
        let a =   await esperar(100,2);
        let  b = await fallaren(200,1)
        
    } catch (error) {
        console.log(error)
        throw "Error Grave " + error
    }
    
    return a * b * val;
}

asy(5).then(
    function(data){
        console.log("aqui estoy " , data);
    }).catch(function (err) {
        console.log(err)
    })