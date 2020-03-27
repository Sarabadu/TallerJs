let a;

a = [1, 2, 3, 4, 5, 6]

function red(anterior, actual) {
    let a = [actual, anterior];
    console.log(a)
    return a

}




console.log(a.reduce(red))