// Inserindo o botão em uma variável
const buutoom = document.getElementById('criar-tarefa');
// Adicionando o eventListener ao botão
buutoom.addEventListener('click', addTask);
// Cria variavel que cria nova linha


function addTask() {
  const newTask = document.createElement('li');
  // captura o conteudo do imput
  const inputContent = document.getElementById('texto-tarefa').value;
  // adiciona a nova linha o conteudo do imput
  newTask.textContent = inputContent;
  // adiciona classe a nova linha
  newTask.classList.add = 'task';
  // adiciona a ol a nova linha
  document.querySelector('#lista-tarefas').appendChild(newTask);
  // limpa o imput
  document.getElementById('texto-tarefa').value = '';
}

/* // Requisito 7
function selectedTask() {
  const listeningToOl = document.getElementById('lista-tarefas');
  listeningToOl.addEventListener('click', (e => {
    const listeningToLi = e.target;
    const selectedElement = document.getElementsByClassName('selected');

    listeningToLi.classList = 'selected';
    listeningToLi.style.backgroundColor = 'rgb(128, 128, 128)'
  }));
}
selectedTask(); */

/* const colorElement = e.target;
const selectedElement = document.querySelector('.selected');
selectedElement.classList.remove('selected');
colorElement.classList.add('selected');
});
} */