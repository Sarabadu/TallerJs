/**
 * Declaracion de funcion
 * function a(){..} 
 */

//a()
function a(){
    console.log("muy facil")
} 
a()

/*-----------------------------------------------------------*/
/**
 * Expresion de funcion
 * let f = function d(){..}
 *  */

let f
f = function (){
    console.log("y esto como se llama")
}

f()
//d()

/*-----------------------------------------------------------*/
/**
 * Funcion como Parametro
 * pepe(function(){..})
 *  */

function pepe (fn){
    console.log(fn.name)
    fn()
}

pepe(function callb(){ console.log("soy un callback")})   //?


/*-----------------------------------------------------------*/
/**
 *  Funcion como metodo de objeto
 * {pepe:function(){..}} 
 * 
 */

let objeto = {
    pepe:function(){console.log("soy un metodo")}
}

objeto.pepe()

/*-----------------------------------------------------------*/
/**
 *  Constructor de funcion
 * new Function(“a”,””)
 */

let newF= new Function('a','console.log("mira mami sali de un string")')

newF()

/*-----------------------------------------------------------*/
/**
 * Arrow Function
 *   ()=>
 *  */
let arrow = a=>console.log("=>",a)
arrow()


/*-----------------------------------------------------------*/
/**
 * Funcion como retorno de otra funcion
 * function a(){
 *     return function(){}
 *  } 
 */

function ret(){
    return function(){
                    console.log("()()")
                    }
}

let retF= ret()

retF()
ret()()


function opt({a:a,b:b,c:c="ss"}){
    console.log(a,b,c)
}

opt({a:"pepe" , b:"tito"})