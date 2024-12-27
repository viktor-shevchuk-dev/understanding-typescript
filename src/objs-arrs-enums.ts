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

enum Role {
  ADMIN,
  READ_ONLY,
  AUTHOR,
}

const person = {
  name: 'John',
  age: 43,
  hobbies: ['Sports', 'Cooking'],
  role: Role.AUTHOR,
};
console.log(person.name);

let favouriteActivities: string[];
favouriteActivities = ['Sports'];

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
  // console.log(hobby.map()); // Error
}

if (person.role === Role.AUTHOR) {
  console.log('is author ', Role.AUTHOR);
}
