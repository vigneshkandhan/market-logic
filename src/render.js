function renderApp(input, todoList) {
  return `<div>${input}${todoList}</div>`;
}

function renderForm() {
  return `<div class="form">
    <input type="text" data-element="addTodoInput">
    <button data-element="addTodoButton">Add</button>
  </div>`;
}

function renderTodos(todoItems) {
  return `<ul class="todos">${todoItems}</ul>`;
}

function renderTodoItem(todo) {
  return `<li class="${`todos__item todos__item_${todo.completed && 'checked'}`}">
    <input type="checkbox" data-element="toggleTodo" data-id="${todo.id}"${todo.completed ? ' checked' : ''}>
    ${todo.title}
  </li>`;
}

export default (element, state) => {
  const todoItems = state.todos.map(renderTodoItem).join('');
  element.innerHTML = renderApp(
    renderForm(),
    renderTodos(todoItems)
  );
}
