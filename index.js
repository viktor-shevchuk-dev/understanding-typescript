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
class DataStorage {
    constructor() {
        this.data = [];
    }
    addItem(item) {
        this.data.push(item);
    }
    removeItem(item) {
        if (this.data.indexOf(item) === -1)
            return;
        this.data.splice(this.data.indexOf(item), 1);
    }
    getItems() {
        return [...this.data];
    }
}
const textStorage = new DataStorage();
textStorage.addItem('John');
const numberStorage = new DataStorage();
numberStorage.addItem(1);
function createCourseGoal(title, description, date) {
    let courseGoal = {};
    courseGoal.title = title;
    courseGoal.description = description;
    courseGoal.completeUntil = date;
    return courseGoal;
}
const names = ['John', 'Ann', 'Kate'];
// names.push('Bob'); // Property 'push' does not exist on type 'readonly string[]'.
// names.pop(); // Property 'pop' does not exist on type 'readonly string[]'.
