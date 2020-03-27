let a;

a = [1, 2, 3]
console.log("a: ", a)


// pop saca el ultimo elemento y lo devuelve

/*let lastItem = a.pop()
console.log("a: ", a)
console.log("lastItem: ", lastItem)
*/
// shift saca el primer elemento y lo devuelve
/*let head = a.shift()

console.log("a: ", a)
console.log("head", head)


// push agrega un elemento al final
a.push(1)
console.log("a: ", a)

//unshift agrega un elemento al principio
a.unshift(3)
console.log("a: ", a)
*/

// join devuelve un string contodos los elementos del array
let str;

str = a.join()
console.log("str: ", str)

str = a.join('')
console.log("str: ", str)

str = a.join(' +-+ ')
console.log("str: ", str)

str = ["Yo", "Trabajo"].join(' no ')
console.log("str: ", str)


if (str) {
    console.log("es verdad")
}
console.log("a.length: ", a.length)
