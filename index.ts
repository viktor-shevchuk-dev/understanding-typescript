let userInput: unknown;
let userName: string;

userInput = 1;
userInput = 'John';

if (typeof userInput === 'string') {
  userName = userInput;
}

function generateError(message: string, code: number): never {
  throw { message, code };
}

try {
  generateError('An error occured', 500);
} catch (error) {
  console.log(error);
}
