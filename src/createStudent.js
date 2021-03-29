// Referência: https://github.com/tryber/sd-010-a-project-js-unit-tests/pull/109/files
const createStudent = (nome) => {
  const studentFeedback = (feedback) => 'Eita pessoa boa!';
  const studant = { name: '', feedback: studentFeedback };
  studant.name = nome;
  return studant;
};
module.exports = createStudent;
