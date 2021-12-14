const btnAdd = document.querySelector('.tasks__to-do__btn');
let inputTask = document.querySelector('.tasks__to-do__input');
let totalTitleTasks = document.querySelector('.tasks__to-do__title-total');
let totalTasks = document.querySelector('.tasks__to-do__list-total');

btnAdd.addEventListener('click', () => createTask());

let a = 1;

window.addEventListener('keydown', (e) => {
  if(e.code === 'Enter') {
    createTask();
  }
});

function createTask(){
  if (inputTask.value == '') {
    return false;
  }
  let container = document.getElementById('tasks__to-do__list-item');
  let mainDiv = document.createElement('div');
  mainDiv.className = 'main__item';
  container.appendChild(mainDiv);

  let checkbox = document.createElement('INPUT');
  checkbox.setAttribute("type", "checkbox");
  checkbox.className = 'tasks__to-do__list-check';
  mainDiv.appendChild(checkbox);

  let div = document.createElement('div');
  div.className = 'item';
  div.innerHTML = inputTask.value;
  div.style.backgroundImage = 'url(./assets/img/delete.svg)';
  mainDiv.appendChild(div);

  container.className = 'tasks__to-do__list-item';

  inputTask.value = '';

  totalTitleTasks.innerHTML = `${a}`;
  totalTasks.innerHTML = `${a}`;
  a += 1;

  div.addEventListener('click', () => {
    a -= 1;
    totalTitleTasks.innerHTML = `${a-1}`;
    totalTasks.innerHTML = `${a-1}`;
    container.removeChild(mainDiv);
  })
}