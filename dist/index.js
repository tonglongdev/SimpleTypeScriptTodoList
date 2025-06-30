"use strict";
// GET ELEMENTS
const input = document.getElementById("inputExp");
const form = document.querySelector("#formExp");
const list = document.querySelector("#listExp");
// VARIABLES
const todoList = [];
// LOGIC
form.addEventListener("submit", function (event) {
    event.preventDefault();
    const todo = {
        text: input.value.trim() || "Sample",
        isChecked: false,
    };
    todoList.push(todo);
    createTodo(todo);
    input.value = "";
    console.log(todoList);
});
function createTodo(todo) {
    const li = document.createElement("li");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    li.textContent = todo.text;
    li.appendChild(checkbox);
    checkbox.addEventListener("change", function () {
        todo.isChecked = checkbox.checked;
        li.style.textDecoration = checkbox.checked ? "line-through" : "none";
    });
    list.append(li);
}
