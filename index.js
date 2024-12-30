"use strict";
let add;
add = (n1, n2) => {
    return n1 + n2;
};
add(1, 2);
class Person {
    constructor(n) {
        this.age = 30;
        if (n) {
            this.name = n;
        }
    }
    greet(phrase) {
        if (this.name) {
            console.log(phrase + ' ' + this.name);
        }
        else {
            console.log(phrase);
        }
    }
}
let user1;
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
}
else {
    console.log('No greet method defined.');
}
// user1.name = '';
console.log(user1);
