type Admin = { name: string; privileges: string[] };

type Employee = { name: string; startDate: Date };

// interface ElevatedEmployee extends Employee, Admin {}

type ElevatedEmployee = Admin & Employee;

const e1: ElevatedEmployee = {
  name: 'Max',
  privileges: ['create-server'],
  startDate: new Date(),
};

type Combinable = string | number;
type Numeric = number | boolean;

type Universal = Combinable & Numeric;

function add(a: number, b: number): number;
function add(a: string, b: string): string;
function add(a: Combinable, b: Combinable) {
  if (typeof a === 'string' || typeof b === 'string') {
    return a.toString() + b.toString();
  }

  return a + b;
}

const result = add(1, 2);
result.toFixed();

const fetchedUserData = {
  id: 'u1',
  name: 'Viktor',
  job: { title: 'CEO', description: 'My own company' },
};
console.log(
  `I am a ${fetchedUserData?.job?.title} of ${fetchedUserData?.job?.description}.`
);

const userInput = null;
const storedData = userInput ?? 'Default value';

type UnknownEmployee = Employee | Admin;

function printEmployeeInformation(emp: UnknownEmployee) {
  console.log('Name: ' + emp.name);

  if ('privileges' in emp) {
    console.log('Privileges: ' + emp.privileges);
  }

  if ('startDate' in emp) {
    console.log('Start Date: ' + emp.startDate);
  }
}

printEmployeeInformation({
  name: 'Max',
  startDate: new Date(),
});

class Car {
  drive() {
    console.log('Driving...');
  }
}

class Truck {
  drive() {
    console.log('Driving a truck...');
  }

  loadCargo(amount: number) {
    console.log('Loading cargo...' + amount);
  }
}

type Vehicle = Car | Truck;

function useVehicle(vehicle: Vehicle) {
  vehicle.drive();

  // if ('loadCargo' in vehicle) {
  if (vehicle instanceof Truck) {
    vehicle.loadCargo(1000);
  }
}

const v1 = new Car();
const v2 = new Truck();
useVehicle(v1);
useVehicle(v2);

interface Bird {
  type: 'bird';
  flyingSpeed: number;
}
interface Horse {
  type: 'horse';
  runningSpeed: number;
}
type Animal = Bird | Horse;
function moveAnimal(animal: Animal) {
  let speed;
  switch (animal.type) {
    case 'bird':
      speed = animal.flyingSpeed;
      break;
    case 'horse':
      speed = animal.runningSpeed;
      break;
  }
  console.log(animal.type + ' is moving at speed ' + speed);
}

moveAnimal({ type: 'horse', runningSpeed: 12 });

import { JSDOM } from 'jsdom';
const dom = new JSDOM('<!DOCTYPE html><p></p>');
const document = dom.window.document;

const nodeRefs = { input: document.createElement('input') };
nodeRefs.input.id = 'user-input';
document.body.appendChild(nodeRefs.input);

const browserRefs = {
  // input: <HTMLInputElement>document.getElementById('user-input'),
  input: document.getElementById('user-input') as HTMLInputElement,
};
console.log(browserRefs.input);
browserRefs.input.value = '';

interface ErrorContainer {
  [key: string]: string;
  id: string; // the same type as the index property only!
}

const errorBag: ErrorContainer = {
  id: 'email1',
  email: 'Not a valid email',
  userName: 'Must start with a capital character',
};
