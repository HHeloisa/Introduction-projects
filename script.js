// Requisito 2- Criando paleta de cores
function creatingColorPaddles() {
  for (let index = 0; index < 4; index += 1) {
    const creatColorPaddles = document.createElement('div');
    document.getElementById('color-palette').appendChild(creatColorPaddles)
      .style.listStyle = 'none';
    creatColorPaddles.classList = 'color';
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
// Requisito 4 criar boxdepixel 5x5
function creatingPixelPaintingBoard() {
  const newDiv = document.createElement('div');
  document.getElementById('board').appendChild(newDiv);
  newDiv.id = 'pixel-board';
  for (let index = 1; index <= 5; index += 1) {
    const createdComunNew = document.createElement('div');
    createdComunNew.classList = 'column';
    document.getElementById('pixel-board').appendChild(createdComunNew);
    for (let indexA = 1; indexA <= 5; indexA += 1) {
      const createdLine = document.createElement('div');
      createdComunNew.appendChild(createdLine);
      createdLine.classList = 'pixel';
    }
  }
}
creatingPixelPaintingBoard();

// Estabelecendo a cor preta como selecionada
function blackColor() {
  document.getElementsByClassName('color')[0].classList.add('selected');
}
blackColor();

/* // Requisito 7 - Murilo Gonçalves contribuiu na resolução, principalmente através da explicação do (e)
function classChange() {
  const elementColors = document.getElementById('color-palette');
  elementColors.addEventListener('click', function (e) {
    const colorElement = e.target;
    const selectedElement = document.querySelector('.selected');
    selectedElement.classList.remove('selected');
    colorElement.classList.add('selected');
  });
}
classChange(); */

/* // Requisito 8
function clickColor() {
  let selectBoard = document.getElementById('pixel-board');
  selectedBoard.addEventListener('click', function(e)) {
    let pixel = e.target;
    let colorSelected = document.querySelector('selected').style.backgroundColor;
    pixel.style.backgroundColor = colorSelected;
  }
}
clickColor(); */
