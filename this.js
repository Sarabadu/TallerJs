let leon = {
	nombre:"leo",
	gracia: function (){
		console.log("miau, soy el leon " + this.nombre)
	},

}

leon.gracia()

let domador = {
	hazTuGracia: null
}

domador.hazTuGracia = leon.gracia

domador.hazTuGracia()


console.log ("---------------------------")


//para correr en el navegador


/**
 * Default binding
 *  
 */
function fun(a) {
    
	console.log(this.f)
	
}

var f = 2
fun() 
 
/**
 * implicit binding
 * 
 */
function foo() {
	console.log( this.a );
}

var obj = {
	a: 2,
	foo: foo
};

obj.foo(); // 2


/**
 *  Perdida de implicit binding
 * 
 */

function foo() {
	console.log( this.a );
}

var obj = {
	a: 2,
	foo: foo
};

var bar = obj.foo; // function reference/alias!

var a = "oops, global"; // `a` also property on global object

bar(); // "oops, global"



/**
 *  Explicit binding
 */
function foo() {
	console.log( this.a );
}

var obj = {
	a: 2
};

foo.call( obj ); // 2



/**
 * Hard Binding
 *  */


function foo() {
	console.log( this.a );
}

var obj = {
	a: 2
};

var bar = function() {
	foo.call( obj );
};

bar(); // 2
setTimeout( bar, 100 ); // 2

// `bar` hard binds `foo`'s `this` to `obj`
// so that it cannot be overriden
bar.call( window ); // 2


