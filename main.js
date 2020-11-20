const form = document.querySelector(".form");
const todoList = document.querySelector(".todo-list");
const total = document.querySelector("#total");
const all = document.querySelector(".all");
const display = document.querySelector(".display");
const clearCompleted = document.querySelector(".clear-checked");
const footer = document.querySelector(".hide");
let i = 0;
form.addEventListener("submit", addTodo);
todoList.addEventListener("click", removeAndCompleteTask);
display.addEventListener("click", filterButtons);
clearCompleted.addEventListener("click", removeCompletedTasks);
//add tasks in list
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
//"remove button" and "choose task like complete" logic
function removeAndCompleteTask(event) {
  if (event.target.classList.contains("btn-remove")) {
    event.target.closest("li").remove();
    i--;
    total.textContent = i;
    if (!document.getElementsByClassName("task").length) {
      footer.classList.remove("show");
    }
  }
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

function filterButtons(event) {
  // [...document.getElementsByClassName("task")]
  const arr = Array.from(todoList.children);
  if (event.target.classList.contains("all")) {
    arr.forEach((element) => {
      if (element.classList.contains("task")) {
        element.style.display = "flex";
      }
    });
  } else if (event.target.classList.contains("completed")) {
    // console.log(document.getElementsByClassName("task"));
    arr.forEach((element) => {
      if (element.classList.contains("task")) {
        element.style.display = "none";
      }
    });
    arr.forEach((element) => {
      if (element.classList.contains("complete-task")) {
        element.style.display = "flex";
      }
    });
  } else if (event.target.classList.contains("active")) {
    arr.forEach((element) => {
      if (element.classList.contains("complete-task")) {
        element.style.display = "none";
      }
    });
    arr.forEach((element) => {
      if (element.classList.contains("active-task")) {
        element.style.display = "flex";
      }
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
