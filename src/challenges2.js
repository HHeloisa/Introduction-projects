// Desafio 10
function techList(array, name) {
 let object = {}; 
 let arrayObject = [];
 let arrayOrder= array.sort();
 
     for (let index = 0; index < arrayOrder.length; index += 1) {
      object.tech = arrayOrder[index];
      object.name = name; 
      arrayObject.push(object);
      object = {};
    }
    return arrayObject;
  } 
   console.log(techList(["React", "Jest", "HTML", "CSS", "JavaScript"], "Douglas")); 

     // Desafio 11
function generatePhoneNumber() {
  // seu código aqui
}

// Desafio 12
function triangleCheck() {
  // seu código aqui
}

// Desafio 13
function hydrate() {
  // seu código aqui
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
