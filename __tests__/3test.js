function clousure(){
   var a = 5;
   return function (){
       console.log(a);
   }

}
let f = clousure()
f()

let t = 1
function clousure2 (fn ){
        let x = 17
          return  new Function(fn.name)
}

let f2 = clousure2(function(){
    console.log(x)
})

console.log(f2.toString())
f2()
test('adds 1 + 2 to equal 3', () => {
    expect(f2()).toBe(undefined)
  });


