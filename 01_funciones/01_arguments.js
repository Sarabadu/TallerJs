
function simple(a,b){

}

function args1(){
    console.log("arguments: ",arguments) // Warning
}


function args2(...args){
    console.log("arguments: ",args)
}

args2(1,2,3,4)


function args3(a, ...args){
    console.log("arguments: ",a,args)
}

args3(1,2,3,4)

function optional(a=1,b=1){
    console.log("a+b", a+b)
}

function obj({a,b,c}){
    console.log("a,b,c:",a,b,c)
}
//obj({a:"lala",b:"bababa",c:"fafafaf"})

function opt({a:b,b:a,c:c="ss"}){
    console.log(a,b,c)
}

//opt({a:"pepe" , b:"tito"})