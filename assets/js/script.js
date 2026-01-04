const todoList = JSON.parse(localStorage.getItem('todoList')) || [];

function renderToDo() {
  let todoHTML = '';

  if (todoList) {
    todoList.forEach(todoObject => {
      todoHTML += `
        <div class="todo-container js-todo-container" data-id="${todoObject.id}" data-done="${todoObject.done}">
          <p class="todo" data-id="${todoObject.id}">${todoObject.todo}</p>
        </div>
        `;
    });
  }

  document.querySelector('.js-todo-list-div')
    .innerHTML = todoHTML;
}

function addToDo() {
  const todoInput = document.querySelector('.js-todo-input');
  const id = crypto.randomUUID();

  if (todoInput.value) {
    todoList.push(
      {
        id,
        todo: todoInput.value,
        done: false
      }
    );
    localStorage.setItem('todoList', JSON.stringify(todoList));

    renderToDo();

    todoInput.value = '';
  }
}

function addToDoOnEnter() {
  if (event.key === 'Enter') {
    addToDo();
  }
}

function doneTodo(id) {
  let matchingTodo;
  
  todoList.forEach(todoObject => {
    if (id === todoObject.id) {
      matchingTodo = todoObject;
    }
  });
  matchingTodo.done = true;
  console.log(matchingTodo)
}

renderToDo();

document.querySelector('.js-todo-add-btn')
  .addEventListener('click', () => {
    addToDo();
  });

document.querySelector('.js-todo-input')
  .addEventListener('keydown', () => {
    addToDoOnEnter();
  });

document.querySelectorAll('.js-todo-container')
  .forEach(todo => {
    todo.addEventListener('click', () => {
      doneTodo(todo.dataset.id);

      if (todo.dataset.done === true) {
        todo.classList.add('todo-done');
      }
    });
  });