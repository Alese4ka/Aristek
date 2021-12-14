const btnAdd = document.querySelector('.tasks__to-do__btn');
let inputTask = document.querySelector('.tasks__to-do__input');
let totalTitleTasks = document.querySelector('.tasks__to-do__title-total');
let totalTasks = document.querySelector('.tasks__to-do__list-total');
let completedTasks = document.querySelector('.tasks__completed');
let completedTasksTitle = document.querySelector('.tasks__completed__title');

btnAdd.addEventListener('click', () => createTask());

let a = 1;
let b = 5;
let c = 0; 

window.addEventListener('keydown', (e) => {
  if(e.code === 'Enter') {
    createTask();
  }
});

let tasks = []
function createTask(){
  if (inputTask.value == '') {
    return false;
  }

  if (window.innerWidth <= 600) {
    completedTasks.style.marginTop = `${b}` + 'rem';
    b += 5;
  }

  let container = document.getElementById('tasks__to-do__list-item');
  let mainDiv = document.createElement('div');
  mainDiv.className = 'main__item';
  container.appendChild(mainDiv);

  let checkbox = document.createElement('INPUT');
  checkbox.setAttribute("type", "checkbox");
  mainDiv.appendChild(checkbox);

  let div = document.createElement('div');
  div.className = 'item';
  div.innerHTML = inputTask.value;
  div.style.backgroundImage = 'url(./img/delete.svg)';
  mainDiv.appendChild(div);

  tasks.push(mainDiv);
  
  container.className = 'tasks__to-do__list-item';

  inputTask.value = '';

  totalTitleTasks.innerHTML = `${a+c}`;
  totalTasks.innerHTML = `${a}`;
  a += 1;

  div.addEventListener('click', () => {
    a -= 1;
    totalTitleTasks.innerHTML = `${a-1}`;
    totalTasks.innerHTML = `${a-1}`;
    container.removeChild(mainDiv);
  })

  checkbox.onclick = function() { 
    clickComplete(this);
    a -= 1;
    totalTasks.innerHTML = `${a-1}`;
    c += 1;
    completedTasksTitle.innerHTML = `${c}`;
    div.style.color = '#A3A3A3';
  };
}

function clickComplete(mainDiv) {
  completedContainer = document.querySelector('#tasks__completed__list-item');
  completedContainer.appendChild(mainDiv.parentNode);
  completedContainer.style.textDecoration = 'line-through';
}
