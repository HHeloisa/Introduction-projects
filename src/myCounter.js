const myCounter = () => {
  const myArray = [];
  for (let counter = 0; counter <= 3; counter += 1) {
    myArray.push(counter);
    for (let otherCounter = 2; otherCounter <= 3; otherCounter += 1) {
      myArray.push(otherCounter);
    }
  }
  return myArray;
};

module.exports = myCounter;
