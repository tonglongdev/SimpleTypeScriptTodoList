"use strict";
// GET ELEMENTS
const input = document.getElementById("inputExp");
const form = document.querySelector("#formExp");
const list = document.querySelector("#listExp");
// VARIABLES
const getTodo = localStorage.getItem("todoList");
const todoList = getTodo !== null ? JSON.parse(getTodo) : [];
// INITIALIZE
renderTodoList();
// LOGIC
form.addEventListener("submit", function (event) {
    event.preventDefault();
    const todo = {
        text: input.value.trim() || "Sample",
        isChecked: false,
    };
    todoList.push(todo);
    createTodo(todo);
    saveToLocalStorage();
    input.value = "";
});
function createTodo(todo) {
    const li = document.createElement("li");
    const checkbox = document.createElement("input");
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "X";
    checkbox.type = "checkbox";
    // Load from localStorage
    checkbox.checked = todo.isChecked;
    li.style.textDecoration = todo.isChecked ? "line-through" : "none";
    li.textContent = todo.text;
    li.appendChild(checkbox);
    li.appendChild(deleteBtn);
    checkbox.addEventListener("change", function () {
        todo.isChecked = checkbox.checked;
        li.style.textDecoration = checkbox.checked ? "line-through" : "none";
        saveToLocalStorage();
    });
    deleteBtn.addEventListener("click", function () {
        const index = todoList.indexOf(todo);
        if (index !== -1) {
            todoList.splice(index, 1);
            saveToLocalStorage();
            li.remove();
        }
    });
    list.append(li);
}
function saveToLocalStorage() {
    localStorage.setItem("todoList", JSON.stringify(todoList));
}
function renderTodoList() {
    todoList.forEach(createTodo);
}
