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
  let size = 5;
  for (let index = 1; index <= size; index += 1) {
    const createdColumun = document.createElement('div');
    createdColumun.classList = 'column';
    document.getElementById('pixel-board').appendChild(createdColumun);
    for (let indexA = 1; indexA <= size; indexA += 1) {
      const createdLine = document.createElement('div');
      createdColumun.appendChild(createdLine);
      createdLine.classList = 'pixel';
    }
  }
}
creatingPixelPaintingBoard();

// Requisito 6 - Estabelecendo a cor preta como selecionada
function blackColor() {
  document.getElementsByClassName('color')[0].classList.add('selected');
}
blackColor();

// Requisito 7 - Murilo Gonçalves contribuiu na resolução, principalmente através da explicação do (e)
function classChange() {
  const elementColors = document.getElementById('color-palette');
  elementColors.addEventListener('click', function (e) {
    const colorElement = e.target;
    const selectedElement = document.querySelector('.selected');
    selectedElement.classList.remove('selected');
    colorElement.classList.add('selected');
  });
}
classChange();

let teste = document.getElementsByClassName
/* // Requisito 8

function pintPixel() {
  let selectBoard = document.getElementById('pixel-board');
  selectedBoard.addEventListener('click', function(e)) {
    let pixel = e.target;
    let colorSelected = document.querySelector('.selected').style.backgroundColor;
    pixel.style.backgroundColor = colorSelected;
  }
}
pintPixel(); */
