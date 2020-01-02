let objeto1 = {id:"1", nombre: "lala1", apellido: "lala1"};
let objeto2 = {id:"2", nombre: "lala5", apellido: "lala2"};
let objeto3 = { id : false, nombre: "lala3", apellido: "lala3"};
let objeto4 = { id : 0, nombre: "lala4", apellido: "lala3"};

let array = [objeto1, objeto2, objeto3, objeto4];

console.log(objeto1.pela);




// function filtrar (p) {
//     // if ('id' in p && typeof(p.id) === 'number' && !isNaN(p.id)) {
//     return undefined !== p.id;
// }

// array.filter(filtrar);
console.log(array.filter(filtrarSinId=p => undefined !== p.id));
console.log(array.filter(filtrarSinId));

let [b,c,d]= array
let [...a]=array 
console.log("soy a:" , a)
array.sort(Xnombre);
console.log("sort", array)
function Xnombre(o,p){
    if(o.nombre < p.nombre){ return -1};
    if(o.nombre > p.nombre){ return 1};
    return 0;
}
