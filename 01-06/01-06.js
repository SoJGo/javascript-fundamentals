// 01 - Getting Started
// brew install nvm
// nvm install node
// nvm use node

const world = 'World!';
console.log('Hello,', world);

// #############

// 02 - Running JS Files
// node <fileName.js>

const sayHello = (name) => {
  return `Hello ${name}!`;
}

console.log(sayHello('Bob'));

// npx prettier --check .  /  npx prettier --write .

// #############

// 03 - Vraiables and Getting Visability

const greeting = 'Hello ';
const makers = 'Makers';

console.log(greeting + makers);

// #############

// 04 - Functions

const add = (a, b) => {
  return a + b;
}

// equivalent to
function add(a, b) {
  return a + b;
}

// also equivalent to
var add = function (a, b) {
  return a + b;
}

// #############

// 05 - Returning Values

// No implicit return, so use the return keyword

// Shorthand Syntax

let add = (x, y) => x + y;
// In this example, the arrow function has one expression x + y so it returns the result of the expression.

//However, if you use the block syntax, you need to specify the return keyword:

let add = (x, y) => { return x + y; };

// #############

// 06 - Conditionals

const getNumberSign = (number) => {
  if (number === 0) {
    return 'zero';
  } else if (number > 0) {
    return 'positive';
  } else {
    return 'negative';
  }
}
