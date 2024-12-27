"use strict";
function add(n1, n2) {
    return n1 + n2;
}
function printResult(num) {
    console.log('Result: ' + num);
}
printResult(add(2, 3));
function addAndHandle(n1, n2, cb) {
    const result = n1 + n2;
    cb(result);
}
let combineValues;
combineValues = add;
// combineValues = printResult
// combineValues = 2;
console.log(combineValues(1, 2));
addAndHandle(2, 2, (result) => {
    console.log(result);
    return 3;
});
