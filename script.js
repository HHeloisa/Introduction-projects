// Inserindo o botão em uma variável
const buutoom = document.getElementById('criar-tarefa');
// Adicionando o eventListener ao botão
buutoom.addEventListener('click', addTask);

function addTask() {
  // Cria variavel que cria nova linha
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

function selectedTask() {
  // adicona a uma variavel toda ol
  const listeningToOl = document.getElementById('lista-tarefas');
  // adiciona ouvidor a toda ol
  listeningToOl.addEventListener('click', function (e) {
    // adiciona a variavel os elementos li
    const liGroup = document.getElementsByTagName('li');
    // for que vai rodar os li
    for (let index = 0; index < liGroup.length; index += 1) {
      // passar por cada li e remove a classe selecionada
      liGroup[index].classList.remove('selected');
    }
    // adiciona a variavel a origem do evento
    const listeningToLi = e.target;
    // adiciona a origem do evento a classe "selected"
    listeningToLi.className = 'selected';
  });
}
selectedTask();
