const todoList = JSON.parse(localStorage.getItem('todoList')) || [];

function renderToDo() {
  let todoHTML = '';

  if (todoList) {
    todoList.forEach((todo, index) => {
      todoHTML += `
          <p class="todo">${todo}</p>
          <button class="todo-delete-btn js-todo-delete-btn" data-index="${index}">Delete</button>
        `;
    });
  }

  document.querySelector('.js-todo-list-div')
    .innerHTML = todoHTML;
}

function addToDo() {
  const todoInput = document.querySelector('.js-todo-input');

  if (todoInput.value) {
    todoList.push(todoInput.value);
    localStorage.setItem('todoList', JSON.stringify(todoList));

    renderToDo();

    todoInput.value = '';
  }

  activateDeleteButton();
}

function addToDoOnEnter() {
  if (event.key === 'Enter') {
    addToDo();
  }
}

function activateDeleteButton() {
  document.querySelectorAll('.js-todo-delete-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      const { index } = btn.dataset;
      todoList.splice(index, 1);
      localStorage.setItem('todoList', JSON.stringify(todoList));
      

      renderToDo();
      activateDeleteButton();
    });
  });
}

renderToDo();
activateDeleteButton();

document.querySelector('.js-todo-add-btn')
  .addEventListener('click', () => {
    addToDo();
  });

document.querySelector('.js-todo-input')
  .addEventListener('keydown', () => {
    addToDoOnEnter();
  });



console.log(todoList);
