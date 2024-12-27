function add(n1: number, n2: number) {
  return n1 + n2;
}

function printResult(num: number) {
  console.log('Result: ' + num);
}

printResult(add(2, 3));

function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
  const result = n1 + n2;
  cb(result);
}

let combineValues: (a: number, b: number) => number;
combineValues = add;
// combineValues = printResult
// combineValues = 2;
console.log(combineValues(1, 2));

addAndHandle(2, 2, (result) => {
  console.log(result);
  return 3;
});
