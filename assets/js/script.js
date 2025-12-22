function addToDo() {
  let todoHTML = '';

  todoHTML = `
    <p class="todo">Wash dishes</p>
    <button class="todo-delete-btn">Delete</button>
  `;

  document.querySelector('.js-todo-list-div')
    .innerHTML += todoHTML;
}

document.querySelector('.js-todo-add-btn')
  .addEventListener('click', () => {
    addToDo();
  });