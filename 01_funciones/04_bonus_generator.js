

function* genera() {
    yield "lala"
    yield 5
    yield 34
    return 34
}


let gen = genera()
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())

for (let a of genera()) {
    console.log(a)
}


