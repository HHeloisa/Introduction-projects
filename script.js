function addTask() {
  const newTask = document.createElement('li');
  const inputContent = document.getElementById('texto-tarefa').value;
  newTask.textContent = inputContent;
  newTask.classList.add('task');
  document.querySelector('#lista-tarefas').appendChild(newTask);
  document.getElementById('texto-tarefa').value = '';
}

const buutoom = document.getElementById('criar-tarefa');
buutoom.addEventListener('click', addTask);
const listeningToOl = document.getElementById('lista-tarefas');

function selectedTask() {
  listeningToOl.addEventListener('click', (e) => {
    const liGroup = document.getElementsByTagName('li');
    for (let index = 0; index < liGroup.length; index += 1) {
      liGroup[index].classList.remove('selected');
    }
    const getClassSelected = e.target;
    getClassSelected.classList.add('selected');
  });
}
selectedTask();

function completedTask() {
  const allLi = document.querySelector('#lista-tarefas');
  allLi.addEventListener('dblclick', (e) => {
    const getClassCompleted = e.target;
    if (getClassCompleted.classList.contains('completed')) {
      getClassCompleted.classList.remove('completed');
    } else {
      getClassCompleted.classList.add('completed');
    }
  });
}
completedTask();

function apagarTudo() {
  const removeTask = document.querySelectorAll('.task');
  for (let index = 0; index < removeTask.length; index += 1) {
    removeTask[index].remove();
  }
}

const removeList = document.querySelector('#apaga-tudo');
removeList.addEventListener('click', apagarTudo);

function removeTaskCompleted() {
  const rmCompletedTask = document.querySelectorAll('.completed');
  for (let index = 0; index < rmCompletedTask.length; index += 1) {
    listeningToOl.removeChild(rmCompletedTask[index]);
  }
}
const removeCompleted = document.querySelector('#remover-finalizados');
removeCompleted.addEventListener('click', removeTaskCompleted);
