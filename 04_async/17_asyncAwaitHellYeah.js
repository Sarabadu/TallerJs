/**
 * Un pequeño paso para js un gran paso para el quilombo
 * */

// En el then si omitimos la segunda funcion (la de rechazo) automatimante ejecuta una funcion que lanza un error (throw err)
// por lo que en una cadena de promesas podemos omitirlo y usar el .catch al final 



function obtenerCliente(id) {
    return new Promise(function (resolve, reject) {
        if (id <= 0) {
            setTimeout(() => {
                reject("Error cliente no existe")
            }, 500);
            return;
        }
        setTimeout(() => {
            resolve({ id: id, cuenta: 120 + id })
        }, 500);
        return;

    })
}

function obtenerCuenta(cuenta) {
    return new Promise(function (resolve, reject) {
        if (cuenta <= 124) {
            reject("La cuenta esta bloqueada")  // Mira mami menos chanchadas!!!
            return;
        }
        setTimeout(() => {
            resolve({ cuenta: cuenta, ultimoMov: 1000 + cuenta })
        }, 500);
        return;
    })
}

function obtenerMovimiento(mov) {
    return new Promise(function (resolve, reject) {
        if (mov <= 1130) {
            reject("Usted no tiene permisos para ver ese movimiento", null)
            return;
        }
        setTimeout(() => {
            resolve({ mov: mov, categoria: "turbio", imp: 70000 })
        }, 1000);
        return;

    })
}


async function obtenerUltimoMovByClient(id) {
    try {
        let cliente = await obtenerCliente(id)
        let cuenta = await obtenerCuenta(cliente.cuenta)
        let ultimoMov = await obtenerMovimiento(cuenta.cuenta.ultimoMov)
        return ultimoMov;

    } catch (error) {
        return 0
    }
}




obtenerUltimoMovByClient.then(function (importe) {
    console.log("importe: ", importe)
})

