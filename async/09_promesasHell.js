/**
 * Un pequeño paso para js un gran paso para el quilombo
 * */

// En el then si omitimos la segunda funcion (la de rechazo) automatimante ejecuta una funcion que lanza un error (throw err)
// por lo que en una cadena de promesas podemos omitirlo y usar el .catch al final 



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



impUltimoMovimiento  = obtenerCliente(0)
.then(
    function (data) {
        console.log("Data1:", data)
        return obtenerCuenta(data.cuenta)
    },
    function(err){             // En el then si omitimos la segunda funcion (la de rechazo) automatimante ejecuta una funcion que lanza un error (throw err)
        throw err                 // por lo que en una cadena de promesas podemos omitirlo y usar el .catch al final 
    })
.then(    
    function (cuenta) {
        console.log("Data2:", cuenta)
        return obtenerMovimiento(cuenta.ultimoMov)
    })
.then(
    function (movimiento) {
        console.log("Data3:", movimiento)
        return movimiento.imp
    })
.catch(function catched(err) {
    console.log("catch",err)
    return 1
})


impUltimoMovimiento.then(function (importe) {
    console.log("importe: " , importe)
})

