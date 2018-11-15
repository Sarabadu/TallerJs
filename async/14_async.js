/**
 * I have a dream...
 * 
 * Una funcion asyncrona es una funcion que devuelve una promesa 
 * 
 * */

/*********************************** */
 async function asy(val){
    let cliente =  2 * val;
    return cliente;
}

asy(5).then(
    function(data){
        console.log("aqui estoy " , data);
        
    }
)







