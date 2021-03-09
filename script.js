// Requisito 2- Criando paleta de cores
function creatingColorPaddles() {
  for (let index = 0; index < 4; index += 1) {
    const creatingColorPaddles = document.createElement('div');
    document.getElementById('color-palette').appendChild(creatingColorPaddles)
      .style.listStyle = 'none';
    creatingColorPaddles.className = 'color';
  }
}
creatingColorPaddles();

// Colorindo a paleta de cores
function paytingColorPaddles() {
  const colorsPaddles = document.getElementsByClassName('color');
  colorsPaddles[0].style.backgroundColor = 'black';
  colorsPaddles[1].style.backgroundColor = 'purple';
  colorsPaddles[2].style.backgroundColor = 'gray';
  colorsPaddles[3].style.backgroundColor = 'yellow';
}
paytingColorPaddles();

// Requisito 4 criar boxdepixel //
function creatingPixelPaintingBoard() {
  const bigBox = document.createElement('div');
  document.body.appendChild(bigBox);
  bigBox.id = 'pixel-board';
  for (let index = 1; index <= 5; index += 1) {
    const createdLine = document.createElement('div');
    document.querySelector('div').appendChild(createdLine);
    for (let indexA = 1; indexA <= 5; indexA += 1) {
      const createdColumn = document.createElement('div');
      createdLine.appendChild(createdColumn);
      createdColumn.classList = 'pixel';
    }
  }
}
creatingPixelPaintingBoard();

// Estabelecendo a cor preta como selecionada
function blackColor() {
  document.getElementsByClassName('color')[0].classList.add('selected');
}
blackColor();
//  function (clicked) {
// remover a classe "selected"
// add a classe selected
// document.getElementsByClassName(corSelecionada).classList.add('selected');
