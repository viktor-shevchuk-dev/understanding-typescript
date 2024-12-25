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

const merge = <T extends object, U extends object>(objA: T, objB: U) => {
  return Object.assign({}, objA, objB);
};

const mergedObj1 = merge<{ name: string }, { age: number }>(
  { name: 'John' },
  { age: 21 }
); // redundant
const mergedObj2 = merge({ name: 'John', hobbies: ['sports'] }, { age: 21 });
console.log(mergedObj1.age);

interface Lengthy {
  length: number;
}

function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
  let descrText = 'Got no value.';

  if (element.length > 0) {
    descrText = 'Got ' + element.length + ' elements.';
  }

  return [element, descrText];
}

console.log(countAndDescribe('Hi there!'));
console.log(countAndDescribe([]));

function extractAndConvert<T, U extends keyof T>(obj: T, key: U) {
  return obj[key];
}

console.log(extractAndConvert({ name: 'John' }, 'name'));
