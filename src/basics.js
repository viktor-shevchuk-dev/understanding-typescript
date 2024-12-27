"use strict";
function add(n1, n2, showResult, phrase) {
    if (showResult) {
        console.log(`${phrase} ${n1 + n2}`);
    }
    else {
        return n1 + n2;
    }
}
const num1 = 5;
const num2 = 2.4;
const printResult = true;
const resultPhrase = 'Result is: ';
add(num1, num2, printResult, resultPhrase);
