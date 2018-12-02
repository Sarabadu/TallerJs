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

function obtenerCuenta(cuenta){
    return new Promise(function(resolve,reject){
        if (cuenta <=  124){
            reject("La cuenta esta bloqueada")  // Mira mami menos chanchadas!!!
            return;
        }
        setTimeout(()=>{
            resolve({cuenta:cuenta,ultimoMov:1000+cuenta})
        }, 500);
        return;
    })
}

function obtenerMovimiento(mov){
    return new Promise(function (resolve,reject) {
        if (mov <= 1130){
            reject("Usted no tiene permisos para ver ese movimiento",null) 
            return;
        }
        setTimeout(()=>{
            resolve({mov:mov,categoria:"turbio",imp:70000})
        }, 1000);
        return;
        
    })
}

function *gen(){

    let a = yield obtenerCliente(11)
    let b = yield obtenerCuenta(a.cuenta)
    console.log("soy a:",a)
    console.log("soy b:",b)
    return b.ultimoMov
}


function lalala(gene){
    it = gene();

    function proximo (res){
        if (res.done){
            return Promise.resolve(res.value)
        }
        return Promise.resolve(res.value).then(function(a){
            return proximo(it.next(a))
        })

    }
   
    return proximo(it.next())

}
lalala(gen).then(function(a){
    console.log("termine",a)
})
