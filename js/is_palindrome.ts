function isPalindromeRecur(str: string): boolean {
    if (str.length === 0 || str.length === 1) {
        return true;
    }

    const head = str[0];
    const mid = str.slice(1, str.length - 1);
    const tail = str[str.length - 1];

    return tail === head && isPalindromeRecur(mid);
}


(() => {
    const testCases = [
        'a',
        'aa',
        'aba',
        'abba',
        'abc',
        'abca',
        'abcba',
        'abcdcba',
    ];

    testCases.forEach((testCase) => {
        console.log(`${testCase}: ${isPalindromeRecur(testCase)}`);
    }
    );

})();


