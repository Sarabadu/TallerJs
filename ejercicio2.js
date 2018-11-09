function *genera (){
    yield "lala"
    yield 5
    return 34
}
let gen= genera()
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())
for( a of genera()){
    console.log(a)
}



