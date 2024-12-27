"use strict";
// const person: {
//   name: string;
//   age: number;
//   hobbies: string[];
//   role: [number, string];
// } = {
//   name: 'John',
//   age: 43,
//   hobbies: ['Sports', 'Cooking'],
//   role: [2, 'author'],
// };
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
const person = {
    name: 'John',
    age: 43,
    hobbies: ['Sports', 'Cooking'],
    role: Role.AUTHOR,
};
console.log(person.name);
let favouriteActivities;
favouriteActivities = ['Sports'];
for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase());
    // console.log(hobby.map()); // Error
}
if (person.role === Role.AUTHOR) {
    console.log('is author ', Role.AUTHOR);
}
