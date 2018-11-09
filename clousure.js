// holis Pabli
function addMaker(a){
    return function (b){
        return a+b;
    }
}

function soloUna(){
    let llamada = false
    return function (){
        if(!llamada){
            llamada = true
            console.log("hago algo")
        }
        else{
            throw "No se puede llamar mas de una vez"
        }
    }
}

let una = soloUna();
una()
//una()

function fifo(a){
    let b =[a];
    return function (c){
            let d = b.pop()
            b.push(c)
            return d;        
    }
}


let a = fifo(1);
console.log(a(2))
console.log(a("a"))
console.log(a("3"))
console.log(a(2))
console.log(a(5))
console.log(a(2))


function cuenta (fn){
      let count = 0
      return function (...args){
          count++
          return [fn(...args),count]
      }
}


let b =  cuenta(fifo(1));

console.log(b(2))
console.log(b("f"))
console.log(b("123"))
console.log(b("1234"))
console.log(b("12345"))


