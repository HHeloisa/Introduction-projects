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
  colorsPaddles[0].style.backgroungColor = 'black';
  colorsPaddles[1].style.backgroundColor = 'purple';
  colorsPaddles[2].style.backgroundColor = 'gray';
  colorsPaddles[3].style.backgroundColor = 'yellow';
}
paytingColorPaddles();

//

//  function (clicked) {
// remover a classe "selected"
// add a classe selected
// document.getElementsByClassName(corSelecionada).classList.add('selected');
// quando a pagina carregar
// criar um loop
// para criar 5 caixinhas
// criar por 5 linhas
//   de fundo branco
//   especificar borda, tamanho  e tal
//
