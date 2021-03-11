function addTask() {
  const buutoom = document.getElementById('criar-tarefa');
  buutoom.addEventListener('click', addTask);
  const newTask = document.createElement('li');
  const inputContent = document.getElementById('texto-tarefa').value;
  newTask.textContent = inputContent;
  document.getElementById('lista-tarefas').appendChild(newTask);
}
addTask();
