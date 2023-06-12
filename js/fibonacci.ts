function fibonacciRecur(position: number) {

    if (position === 1 || position === 2) {
        return 1;

    }
    return fibonacciRecur(position-1) + fibonacciRecur(position-2);
}


function fibonacciIter(position: number) {
    let a = 1;
    let b = 1;
    let next = 0;
    for(let i = 1; i <position; i++){
        next = a + b
        a = b;
        b = next;
    }
    return a;
}
(()=> {
    console.log(fibonacciRecur(2));
    console.log(fibonacciRecur(10));
    console.log(fibonacciIter(2));
    console.log(fibonacciIter(10));
})()
