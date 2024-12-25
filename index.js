"use strict";
// const names: Array<string> = ['Max', 'Manuel']; // string[]
// names[0].split(' ');
// const promise: Promise<number> = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve(10);
//   }, 2000);
// });
// promise.then((data) => {
//   data.split(' '); // Property 'split' does not exist on type 'number'.
// });
const merge = (objA, objB) => {
    return Object.assign({}, objA, objB);
};
const mergedObj1 = merge({ name: 'John' }, { age: 21 }); // redundant
const mergedObj2 = merge({ name: 'John', hobbies: ['sports'] }, { age: 21 });
console.log(mergedObj1.age);
function countAndDescribe(element) {
    let descrText = 'Got no value.';
    if (element.length > 0) {
        descrText = 'Got ' + element.length + ' elements.';
    }
    return [element, descrText];
}
console.log(countAndDescribe('Hi there!'));
console.log(countAndDescribe([]));
function extractAndConvert(obj, key) {
    return obj[key];
}
console.log(extractAndConvert({ name: 'John' }, 'name'));
