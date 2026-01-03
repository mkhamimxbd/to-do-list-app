const todoList = JSON.parse(localStorage.getItem('todoList')) || [];

function renderToDo() {
  let todoHTML = '';

  if (todoList) {
    todoList.forEach(todoObject => {
      todoHTML += `
        <div class="todo-container">
          <p class="todo">${todoObject.todo}</p>
          <button class="todo-delete-btn js-todo-delete-btn" data-id="${todoObject.id}">Delete</button>
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

renderToDo();

document.querySelector('.js-todo-add-btn')
  .addEventListener('click', () => {
    addToDo();
  });

document.querySelector('.js-todo-input')
  .addEventListener('keydown', () => {
    addToDoOnEnter();
  });

// document.querySelectorAll('.todo-container')
//   .forEach(todo => {
//     todo.addEventListener('click', () => {
//       todo.classList.add('todo-done');
//       console.log('clicked')
//     });
//   });