/*
  Desenvolva um objeto calculator que possui quatro chaves:
    - add;
    - mult;
    - div;
    - sub.
  Para cada uma delas atribua uma função que realiza a respectiva operação.
  A função deve receber dois inteiros e retornar um inteiro.
  Os resultados das divisões devem sempre ser arredondados para baixo.

  Faça as funções com arrow functions!

  Parâmetros:
  - Um número inteiro;
  - Um número inteiro;

  Comportamento:
  calculator.add(1, 1) // Retorno: 2;
  calculator.div(3, 2) // Retorno: 1;
*/

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
