function clous(fn){
    let a = "a"
    return function(){
        console.log(fn())
    }
}


let fun2 = clous(function pepe(){
    return "hola soy a " +a
})
fun2()
