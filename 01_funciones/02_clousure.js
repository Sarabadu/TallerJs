
/*
function copyrighter(by) {

    return function (a) {
        return a + by
    }
}


let cc = copyrighter(" by Santi")
console.log('cc("la la la"):', cc("la la la"));
console.log('cc(1):', cc(1));
console.log('cc("juan "):', cc("juan "));

*//*
let a = 10
function bruno(z) {
    z = 20
}
bruno(a)
console.log(a)

/*

function counter() {
    let count = 0;

    return function () {
        return ++count;
    }
}

let count = counter();


console.log('count():', count());
console.log('count():', count());
console.log('count():', count());
console.log('count():', count());
console.log('count():', count());
console.log('count():', count());
*/

/*
// holis
function addMaker(a) {
    return function (b) {
        return a + b; // la funcion retornada siempre va a poder acceder al valor de "a"
    }
}
console.log(addMaker(2)(18))
let add2 = addMaker(2);

console.log('add2(18):', add2(18));
console.log('add2(1):', add2(1));
console.log('add2(27):', add2(27));








*/

/*
function soloUna() {
    let llamada = false
    return function () {
        if (!llamada) {
            llamada = true
            console.log("hago algo")
        }
        else {
            throw "No se puede llamar mas de una vez"
        }
    }
}

let una = soloUna();
una()
una()
*/

function fifo(a) {
    let b = [a];
    return function (c) {
        let d = b.pop()
        b.push(c)
        return d;
    }
}

/*
let a = fifo(1);
console.log(a(2))
console.log(a("a"))
console.log(a("3"))
console.log(a(2))
console.log(a(5))
console.log(a(2))
*/


function cuenta(fn) {
    let count = 0
    return function (...args) {
        count++
        return [fn(...args), count]
    }
}

/*
let b = cuenta(fifo(1));

console.log(b(2))
console.log(b("f"))
console.log(b("123"))
console.log(b("1234"))
console.log(b("12345"))
*/



function clous() {
    let a = "a"
    function fn() {
        return "hola soy a " + a
    }
    return function () {
        console.log(fn())
    }
}


let a = "b"


let fun2 = clous()

fun2() //?? expected?
