function reverseStringRecur(str: string):string {
    if (str.length === 0 || str.length === 1) {
        return str;
    }

    const head = str[0];
    const tail = str.slice(1);

    return reverseStringRecur(tail) + head;
}


// Path: reverse-string.ts

function reverseStringIter(str: string):string {
    let result = '';
    for (let i = str.length - 1; i >= 0; i--) {
        result += str[i];
    }

    return result;
}

(() => {
    const str = 'hello';
    console.log(reverseStringRecur(str));
    console.log(reverseStringIter(str));
})();


