function Fib(n) {
    if ( n <= 1 || n === 2) {
        return 1;
    }
    return Fib(n-1) + Fib(n-2);
}


console.log(Fib(1));
console.log(Fib(2));
console.log(Fib(3));
console.log(Fib(4));
console.log(Fib(5));
console.log(Fib(6));
console.log(Fib(7));