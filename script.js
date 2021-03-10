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

// Requisito 7 - Murilo Gonçalves contribui, principalmente pela explicação do (e)
function classChange() {
  let elementColors = document.getElementById('color-palette');
  elementColors.addEventListener('click', function(e) {
    let colorElement = e.target;
    let selectedElement = document.querySelector('.selected')
    selectedElement.classList.remove('selected');
    colorElement.classList.add('selected');
  })
}
classChange();

// Tornando as paletas de cores clicaveis
// let clickColor = document.querySelectorAll('.color');
// clickColor.addEventListner('click', 'selectedColor');

// Estabelecendo função de cor selecionada
// function selectedColor(eventoDeOrigem) {
// remove a cor anterior selecionada
// document.getElementsByClassName('selected').classList.remove('selected');
// adiciona seleção a cor clicada target(evento de origem)
//
//}

// remover a classe "selected"
// add a classe selected
// document.getElementsByClassName(corSelecionada).classList.add('selected');
