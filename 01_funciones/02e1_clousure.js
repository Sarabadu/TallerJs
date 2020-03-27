// Hacer una funcion funMaker, 
// que retorne una funcion donde 
// se pueda intentar solo 3 veces adivinar una calve
// en caso de adivinar llame a un callback por ok
// en caso de errar llame a un callback por err 
// en caso de superar los 3 intentos siempre devolver error

function funMaker(clave, cbErr, cbOk) {
    let count = 3;
    return function (claveIntento) {

        if (count <= 0) {
            cbErr(count);
        } else {
            if (claveIntento === clave) {
                cbOk(4 - count);

            } else {
                cbErr(count - 1);
            }
            count--;
        }
    }

}



function cb1(intentos) {
    console.log(`te quedan ${intentos} intentos`)
}
function cb2(intentos) {
    console.log(`lo lograste en el intento: ${intentos}`)
}
let fun = funMaker("123", cb1, cb2)

fun("lalala");//te quedan 2 intentos
fun("lalala");// te quedan 1 intentos
fun("lalala");// te quedan 0 intentos
fun("lalala");// te quedan 0 intentos

let fun2 = funMaker("123", cb1, cb2);
fun2("lalala");//te quedan 2 intentos
fun2("lalala");//te quedan 1 intentos
fun2("123");// lo lofraste en el intento: 3

