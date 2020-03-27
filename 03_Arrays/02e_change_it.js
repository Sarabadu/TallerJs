let a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


// modificar el array, convirtiendo cada elemento a string y agregando el elemento +0.5
// ej: [1,2,3] => ["1","1.5","2","2.5","3","3.5"]
// luego tomar los n elementos del medio donde n = array.length /2
// logearlos como String concatendado " hay tabla, "
//  ej: "2 hay tabla, 2.5 hay tabla, 3"
//  tiene que funcionar para cualquier array de numeros

const max = a.length * 2;

for (let i = 0; i < max; i = i + 2) {

    a.splice(i, 1, a[i].toString(), (a[i] + 0.5).toString());
    console.log(a);

}

const div = max / 2;
console.log(a.slice(div / 2, div + div / 2).join(" Hay tabla, "));
