// Desafio 1
function compareTrue(a, b) 
function compareTrue(a, b) {
  if (a && b === true) {
    return true;
  }
  else {
    return false;
  }
}
console.log(compareTrue(false, false));

// Desafio 2
let area = 0;
function calcArea(base, height) {
  if (base > 0 && height >0) {
    return (base * height) / 2
  }
  // area = (base * altura) /2
}
console.log(calcArea(51, 1));

// Desafio 3
function splitSentence() {
  // seu código aqui
}

// Desafio 4
function concatName() {
  // seu código aqui
}

// Desafio 5
function footballPoints() {
  // seu código aqui
}

// Desafio 6
function highestCount() {
  // seu código aqui
}

// Desafio 7
function catAndMouse() {
  // seu código aqui
}

// Desafio 8
function fizzBuzz() {
  // seu código aqui
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
};
