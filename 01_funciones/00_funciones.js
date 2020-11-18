/**
 * Declaracion de funcion
 * function a(){..} 
 */

a()

function a() {
    console.log("muy facil")

}
a()





/*-----------------------------------------------------------*/
/**
 * Expresion de funcion
 * let f = function d(){..}
 *  */



// let f

// f = function () {
//     console.log("y esto como se llama")
// }

// f()
//d()



/*-----------------------------------------------------------*/
/**
 * Funcion como Parametro
 * pepe(function(){..})
 *  */


// function pepe(fn) {
//     console.log(fn.name)
//     fn(elm)
// }

// function callb() { console.log("soy un callback") }

// pepe(callb)   //?




/*-----------------------------------------------------------*/
/**
 *  Funcion como metodo de objeto
 * {pepe:function(){..}}
 *
 */



// let objeto = {
//     pepe: function () { console.log("soy un metodo") }
// }

// objeto.pepe()




/*-----------------------------------------------------------*/
/**
 *  Constructor de funcion
 * new Function(“a”,””)
 */



// let newF = new Function('a ,b ', 'console.log("mira mami sali de un string" + a + b)')

// newF("yo soy a", "yo soy b")


/*-----------------------------------------------------------*/
/**
 * Arrow Function
 *   ()=>
 *  */

// let arrow = a => {
//     console.log("hola");
//     return "a"
// }
// console.log(arrow("a"))



/*-----------------------------------------------------------*/
/**
 * Funcion como retorno de otra funcion
 * function a(){
 *     return function(){}
 *  }
 */



// function ret() {
//     return function () {
//         console.log("()()")
//     }
// }

// let retF = ret()

// retF()

// ret()()




/*-----------------------------------------------------------*/
/**
 * Funcion recursiva
 * function a(){
 *     a()
 *     return ;
 *  }
 */



// function countDown(number) {
//     if (number <= 0) {
//         console.log("hey llegamos a 0")
//     } else {
//         console.log(number);
//         countDown(number - 1);
//     }
// }
// countDown(-5)