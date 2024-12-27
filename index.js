"use strict";
let userInput;
let userName;
userInput = 1;
userInput = 'John';
if (typeof userInput === 'string') {
    userName = userInput;
}
function generateError(message, code) {
    throw { message, code };
}
try {
    generateError('An error occured', 500);
}
catch (error) {
    console.log(error);
}
