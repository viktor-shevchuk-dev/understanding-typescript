// type AddFn = (a: number, b: number) => number;
interface AddFn {
  (a: number, b: number): number;
}

let add: AddFn;

add = (n1, n2) => {
  return n1 + n2;
};

add(1, 2);

interface Named {
  readonly name?: string;
  outputName?: string;
}

interface Aged {
  age: number;
}

interface Greetable extends Named {
  greet?(phrase: string): void;
}

class Person implements Greetable, Aged {
  name?: string;
  age = 30;

  constructor(n?: string) {
    if (n) {
      this.name = n;
    }
  }

  greet(phrase: string): void {
    if (this.name) {
      console.log(phrase + ' ' + this.name);
    } else {
      console.log(phrase);
    }
  }
}

let user1: Greetable;
user1 = new Person();
// user1 = {
//   name: 'John',
//   age: 12,
//   greet(phrase) {
//     console.log(phrase + ' ' + this.name);
//   },
// };

if (user1.greet) {
  user1.greet('Hi');
} else {
  console.log('No greet method defined.');
}
// user1.name = '';
console.log(user1);
