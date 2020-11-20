const form = document.querySelector(".form");
const todoList = document.querySelector(".todo-list");
const total = document.querySelector("#total");
const all = document.querySelector(".all");
const display = document.querySelector(".display");
const clearCompleted = document.querySelector(".clear-checked");
const footer = document.querySelector(".hide");
let i = 0;
form.addEventListener("submit", addTodo);
todoList.addEventListener("click", removeTodo);
todoList.addEventListener("click", completeTask);
display.addEventListener("click", showHideElements);
clearCompleted.addEventListener("click", removeCompletedTasks);
function addTodo(e) {
  e.preventDefault();

  console.log(form.addinput.value);
  const inputValue = form.addinput.value;
  if (form.addinput.value === "") return;
  form.addinput.value = "";

  generateTodoTemplate(inputValue);
}
function generateTodoTemplate(value) {
  const template = `<li class="task active-task"> <span class="text-content">${value} </span> <button class="btn-remove">Remove</button> </li>`;
  todoList.innerHTML += template;
  i++;
  total.textContent = i;
  if (total.textContent > 0) {
    footer.classList.add("show");
  }
}
function removeTodo(event) {
  total.textContent = i;
  if (event.target.classList.contains("btn-remove")) {
    event.target.closest("li").remove();
    i--;
    total.textContent = i;
  }
  if (!document.getElementsByClassName("task").length) {
    footer.classList.remove("show");
  }
}
function completeTask(event) {
  if (event.target.classList.contains("text-content")) {
    total.textContent = i;
    console.log(event.target);

    event.target.closest("li").classList.toggle("complete-task");
    event.target.closest("li").classList.toggle("active-task");
    let a = document.getElementsByClassName("complete-task");
    let b = document.getElementsByClassName("task");
    i = b.length - a.length;
    total.textContent = i;
  }
}

function showHideElements(event) {
  if (event.target.classList.contains("all")) {
    [...document.getElementsByClassName("task")].forEach((element) => {
      element.style.display = "flex";
    });
  } else if (event.target.classList.contains("completed")) {
    // console.log(document.getElementsByClassName("task"));
    [...document.getElementsByClassName("task")].forEach((element) => {
      element.style.display = "none";
    });
    [...document.getElementsByClassName("complete-task")].forEach((element) => {
      element.style.display = "flex";
    });
  } else if (event.target.classList.contains("active")) {
    [...document.getElementsByClassName("complete-task")].forEach((element) => {
      element.style.display = "none";
    });
    [...document.getElementsByClassName("active-task")].forEach((element) => {
      element.style.display = "flex";
    });
  }
}
function removeCompletedTasks(event) {
  if (event.target.classList.contains("clear-checked"))
    [...document.getElementsByClassName("complete-task")].forEach((element) => {
      element.remove();
    });
  if (!document.getElementsByClassName("task").length) {
    footer.classList.remove("show");
  }
}

total.textContent = i;
