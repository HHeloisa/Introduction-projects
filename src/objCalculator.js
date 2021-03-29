// Referência: https://www.w3schools.com/jsref/jsref_floor.asp;

const add = (num1, num2) => Math.floor(num1 + num2);
const mult = (num1, num2) => Math.floor(num1 * num2);
const div = (num1, num2) => Math.floor(num1 / num2);
const sub = (num1, num2) => Math.floor(num1 - num2);

const calculator = {
  add,
  mult,
  div,
  sub,
};

module.exports = calculator;
