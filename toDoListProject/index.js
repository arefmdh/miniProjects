// Select variables
const todoInput = document.querySelector(".input");
const addBtn = document.querySelector(".add");
const todo = document.querySelector("ul");
const filterTodo = document.querySelector(".filter-todos");
// Event
addBtn.addEventListener("click", addTodo);
todo.addEventListener("click", todoAction);
filterTodo.addEventListener("change", filterTodos);
document.addEventListener("DOMContentLoaded", getLoaclTodo);
// function
function addTodo(e) {
  e.preventDefault();
  const todoList = document.createElement("div");
  todoList.classList.add("todo");
  const todoText = todoInput.value;
  const newTodo = `
  <li><h4>${todoText}</h4></li>
<img
  class="done-todo"
  src="./assets/images/check-square-svgrepo-com.svg"
  alt="check"
/>
<img
  class="remove-todo"
  src="./assets/images/trash-svgrepo-com.svg"
  alt="trash"
/>`;
  todoList.innerHTML = newTodo;
  todo.appendChild(todoList);
  saveLocalTodo(todoText);
  todoInput.value = "";
}
function todoAction(e) {
  const btn = e.target;
  const classes = btn.classList;
  const todoBox = btn.parentElement;
  if (classes.contains("remove-todo")) {
    removeLocalTodo(todoBox);
    todoBox.remove();
  } else if (classes.contains("done-todo")) {
    todoBox.classList.toggle("completed");
  }
}
function filterTodos(e) {
  const filterChosen = e.target.value;
  const todos = [...todo.childNodes];
  todos.forEach((todo) => {
    switch (filterChosen) {
      case "all":
        todo.style.display = "flex";
        break;
      case "completed":
        if (todo.classList.contains("completed")) {
          todo.style.display = "flex";
        } else todo.style.display = "none";
        break;
      case "uncompleted":
        if (!todo.classList.contains("completed")) {
          todo.style.display = "flex";
        } else todo.style.display = "none";
        break;
    }
  });
}
// Local
function saveLocalTodo(todo) {
  let savedTodo = localStorage.getItem("todo")
    ? JSON.parse(localStorage.getItem("todo"))
    : [];
  savedTodo.push(todo);
  localStorage.setItem("todo", JSON.stringify(savedTodo));
}

function getLoaclTodo() {
  let savedTodo = localStorage.getItem("todo")
    ? JSON.parse(localStorage.getItem("todo"))
    : [];
  savedTodo.forEach((element) => {
    const todoList = document.createElement("div");
    todoList.classList.add("todo");
    const newTodo = `
    <li><h4>${element}</h4></li>
  <img
    class="done-todo"
    src="./assets/images/check-square-svgrepo-com.svg"
    alt="check"
  />
  <img
    class="remove-todo"
    src="./assets/images/trash-svgrepo-com.svg"
    alt="trash"
  />`;
    todoList.innerHTML = newTodo;
    todo.appendChild(todoList);
  });
}
function removeLocalTodo(todo) {
  const todoText = todo.children[0].innerText;
  let savedTodo = localStorage.getItem("todo")
    ? JSON.parse(localStorage.getItem("todo"))
    : [];
  const filterTodo = savedTodo.filter((t) => t !== todoText);
  console.log(filterTodo);
  localStorage.setItem("todo", JSON.stringify(filterTodo));
}
