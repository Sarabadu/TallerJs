/**
 * creamos nuestra propia funcion async
 */

console.log("0")

function teEspero(fn){
    console.log("1")

    setTimeout(fn, 1000);
    return;
}

console.log("2")
teEspero(()=>{console.log("3")})
console.log("4")