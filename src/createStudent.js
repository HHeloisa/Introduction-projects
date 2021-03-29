/*
  Dada uma função chamada createStudent que recebe como parâmetro um nome,
  retorne um objeto que contenha duas chaves:
    (1) name, contendo o nome passado como parâmetro;
    (2) feedback, contendo uma função que retorna a frase 'Eita pessoa boa!' ao ser chamada.

  Faça a função da chave feedback com arrow functions!

  Parâmetros:
    - Uma string;
  Comportamento:
    const estudante = createStudent('Leandrão, o Lobo Solitário')

    estudante.name // Retorna: 'Leandrão, o Lobo Solitário'
    estudante.feedback() // Retorna: 'Eita pessoa boa!'
*/
// Referência: https://github.com/tryber/sd-010-a-project-js-unit-tests/pull/109/files
const createStudent = (nome) => {
  const studentFeedback = (feedback) => 'Eita pessoa boa!';
  const studant = { name: '', feedback: studentFeedback };
  studant.name = nome;
  return studant;
};
module.exports = createStudent;
