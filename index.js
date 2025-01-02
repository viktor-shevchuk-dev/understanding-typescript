"use strict";
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
const e1 = {
    name: 'Max',
    privileges: ['create-server'],
    startDate: new Date(),
};
function add(a, b) {
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
console.log(`I am a ${(_a = fetchedUserData === null || fetchedUserData === void 0 ? void 0 : fetchedUserData.job) === null || _a === void 0 ? void 0 : _a.title} of ${(_b = fetchedUserData === null || fetchedUserData === void 0 ? void 0 : fetchedUserData.job) === null || _b === void 0 ? void 0 : _b.description}.`);
const userInput = null;
const storedData = userInput !== null && userInput !== void 0 ? userInput : 'Default value';
function printEmployeeInformation(emp) {
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
    loadCargo(amount) {
        console.log('Loading cargo...' + amount);
    }
}
function useVehicle(vehicle) {
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
function moveAnimal(animal) {
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
const jsdom_1 = require("jsdom");
const dom = new jsdom_1.JSDOM('<!DOCTYPE html><p></p>');
const document = dom.window.document;
const nodeRefs = { input: document.createElement('input') };
nodeRefs.input.id = 'user-input';
document.body.appendChild(nodeRefs.input);
const browserRefs = {
    // input: <HTMLInputElement>document.getElementById('user-input'),
    input: document.getElementById('user-input'),
};
console.log(browserRefs.input);
browserRefs.input.value = '';
const errorBag = {
    id: 'email1',
    email: 'Not a valid email',
    userName: 'Must start with a capital character',
};
