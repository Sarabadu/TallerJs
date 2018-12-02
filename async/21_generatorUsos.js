function *gen(){
    console.log("empezo el generador")
    yield 1
    console.log("holaaa")
    yield 2
    yield 3
    console.log("chauuu")
    return 4

} 

for (const iterator of gen()) {
  console.log(iterator)    
}

let [a,b,c] = gen()

console.log(a,b,c)
