const average = (array) => {
  let arraySum = 0;

  if (array.length === 0) {
    return undefined;
  }
  for (let index = 0; index < array.length; index += 1) {
    if (typeof array[index] !== 'number') {
      return undefined;
    }
    arraySum += array[index];
  }
  return Math.round(arraySum / array.length);
};

module.exports = average;
