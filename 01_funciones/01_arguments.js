function simple(a, b) {

}

function args1() {
    console.log("arguments: ", arguments)
    console.log(arguments.sort()) // Warning
}
//args1("bruno rompe todo", "pero es lindo")


function args2(...args) {
    console.log("arguments: ", args[0])
}

//args2(1, 2, 3, 4)


function args3(a, ...args) {
    console.log("arguments: ", a, args)
}

//args3(1, 2, 3, 4)

function optional(a = 1, b = 1) {
    console.log("a+b", a + b)
}
//optional(3, 5)

function obj({ a, b, c }) {
    console.log("a,b,c:", b, c, a)
}
//obj({ a: "lala", b: "bababa", c: "fafafaf" })

function opt({
    a: b,
    b: a,
    c: c = "ss"
}) {
    console.log(a, b, c)
}

opt({ a: "pepe", b: "tito", c: "" })